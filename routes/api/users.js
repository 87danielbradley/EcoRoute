const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const FriendRequest = require('../../models/FriendRequest');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login")

router.get("/test", (request, response) => response.json({msg: "The users route is working"}));

router.post('/register', (request, response) => {
    const { errors, isValid } = validateRegisterInput(request.body);

    if(!isValid){
        return response.status(400).json(errors);
    }


    //Checking for duplicate emails
    User.findOne({ email: request.body.email})
        .then(user => {
            if (user) {
                // Throw a 400 error if email address has been taken
                return response.status(400).json({email: "This Email has already been registered to an account"})
            } else {
                // Email is unique so we may register new user
                const newUser = new User({
                    username: request.body.username,
                    email: request.body.email,
                    password: request.body.password
                })

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) throw error;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => response.json(user))
                            .catch(error => console.log(error));
                    })
                })
            }
        })
        
})
router.post('/login', (request, response) => {
    const { errors, isValid } = validateLoginInput(request.body);

    if (!isValid){
        return response.status(400).json(errors);
    }

    const email = request.body.email;
    const password = request.body.password;

    User.findOne({email})
        .then(user => {
            if(!user) {
                return response.status(404).json({ email: "This email has not been registered."});
            }
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (error, token) => {
                                response.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }

                        )
                    } else {
                        return response.status(400).json({password: "Password and email combination is incorrect"});
                    }
                })
        })
})
// send friend request
router.get('/friend_request/:userId', passport.authenticate('jwt', {session: false}), 
    (request, response) => {
        const receiver = User.findById(request.params.userId)
        if (!receiver) {
            return response.status(404).json({ error: 'User not found' })
        }
        if (receiver.friends.includes(request.userId)) {
            return response.status(400).json({ error: "Y'all already friends" })
        }
        if (request.userId == request.params.userId) {
            return response.status(400).json({ error: 'You cannot send a friend request to yourself' })
        }

        const friendRequest = FriendRequest.findOne({
            sender: request.userId,
            receiver: request.params.userId,
        })

        if (friendRequest) {
            return res.status(400).json({ error: 'Friend Request already sent' })
        }

        const newFriendRequest = new FriendRequest({
            sender: req.userId,
            receiver: req.params.userId,
        })

        newFriendRequest.save()
        .then(fr => response.json(fr))
        .catch( err => response.status(400).json({ error: 'Something went wrong' }));
    }
);
// accept friend request
router.get('/friend_request/:userId/accept', passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const friendRequest = FriendRequest.findById(req.params.requestId)
        if (!friendRequest) {
            return response.status(404).json({error: 'No request found'})
        }
        const sender = User.findById(friendRequest.sender);
        const reciever = User.findById(friendRequest.reciever);
        // if (sender.friends.includes(friendRequest.receiver)) {
        //     return response.status(400).json({error: 'Already friends'})
        // }
        sender.friends.push(reciever.userId)
        sender.save()
        .then(fr => response.json(fr))
        .catch( err => response.status(400).json({ error: 'Something went wrong' }));
        
        reciever.friends.push(sender.userId)
        reciever.save()
        .then(fr => response.json(fr))
        .catch( err => response.status(400).json({ error: 'Something went wrong' }));
    }
);
// cancel friend request 
router.get('/friend_request/:userId/cancel', passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const friendRequest = FriendRequest.findById(req.params.requestId)
        if (!friendsRequest) {
            return response.status(404).json({ error: 'Request already cenceled or not sended yet' })
        }
        FriendRequest.deleteOne({ _id: req.params.requestId })
        .then(() => response.status(200).json({ message: 'Friend request canceled' }))
        .catch( err => response.status(400).json({ error: 'Something went wrong' }));
    }
);
// decline friend request 
router.get('/friend_request/:userId/decline', passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const friendRequest = FriendRequest.findById(req.params.requestId)
        if (!friendRequest) {
            return response.status(404).json({ error: 'Request already declined or not sended yet' })
        }
        FriendRequest.deleteOne({ _id: req.params.requestId })
        .then(() => response.status(200).json({ message: 'Friend request declined' }))
        .catch( err => response.status(400).json({ error: 'Something went wrong' }));
    }
);

//private auth route
router.get('/current', passport.authenticate('jwt', {session: false}), (request, response) => {
  response.json({
      id: request.user.id,
      username: request.user.username,
      email: request.user.email
  });
})


module.exports = router;