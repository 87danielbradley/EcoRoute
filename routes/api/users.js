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
                    password: request.body.password,
                    location: request.body.location
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
                            email: user.email,
                            friends: user.friends,
                            events: user.events
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
    async (request, response) => {
        try {
            const sender = await User.findById(jwt.decode(request.get('authorization').split('Bearer ')[1]).id)
            const receiver = await User.findById(request.params.userId);
            if (!receiver) {
                return response.status(404).json({ error: 'User not found' })
            }
            // not needed baecause friend button wont be there
            // if (receiver.friends.includes(request.userId)) {
            //     return response.status(400).json({ error: "Y'all already friends" })
            // }

            // used to be called friendRequest 
            const CurrentUserisSender = await FriendRequest.findOneAndUpdate(
                {
                    sender: sender._id,
                    receiver: request.params.userId,
                },
                {
                    $set: { status: 1}
                },
                {
                    upsert: true,
                    new: true
                }
            )
            
            const otherUserSeesPending = await FriendRequest.findOneAndUpdate(
                {
                    sender: request.params.userId,
                    receiver: sender._id
                },

                {
                    $set: { status: 2 }
                },

                {
                    upsert: true,
                    new: true
                }
            )

            const updatCurrentUser = await User.findOneAndUpdate(
                { _id: sender._id },
                { $push: { friends: CurrentUserisSender._id}}
            )

            const updateSoonToBeFriend = await user.findOneAndUpdate(
                { _id: request.params.userId },
                { $push: { friends: otherUserSeesPending._id }}
            )
            // will no longer need this because we will use findoneandupdate 
            // const newFriendRequest = new FriendRequest({
            //     sender: sender._id, // note the difference
            //     receiver: request.params.userId, // note the difference
            // })
            
            

            
            
            // this is the quick fix to automatically add someone as a friend

            
            await FriendRequest.deleteOne({ _id: savedRequest._id })
            response.status(200).json({ message: 'Friend Request Accepted', save })


            // response.status(200).json({ savedRequest })

        } catch (err) {
            console.log(err)
            return response.status(500).json({ error: "whoops" })
        }
    }
);
// accept friend request
router.get('/friend_request/:requestId/accept', passport.authenticate('jwt', {session: false}),
    async (request, response) => {
        try {
            
        } catch (err) {
            console.log(err)
            return response.status(500).json({ error: "whoops" })
        }
    }
);
// cancel friend request 
router.get('/friend_request/:requestId/cancel', passport.authenticate('jwt', {session: false}),
    async (request, response) => {
        try {
            const friendsRequest = await FriendRequest.findById(request.params.requestId,)
            if (!friendsRequest) {
                return response.status(404).json({ error: 'Request does not exist' })
            }
            await FriendRequest.deleteOne({ _id: request.params.requestId })

            response.status(200).json({ message: 'Friend Request Canceled' })
        } catch (err) {
            console.log(err)
            return response.status(500).json({ error: "whoops" })
        }
    }
);
// decline friend request 
router.get('/friend_request/:requestId/decline', passport.authenticate('jwt', {session: false}),
    async (request, response) => {
        try {
            const friendsRequest = await FriendRequest.findById(request.params.requestId,)
            if (!friendsRequest) {
                return response.status(404).json({ error: 'Request does not exist' })
            }
            await FriendRequest.deleteOne({ _id: request.params.requestId })

            response.status(200).json({ message: 'Friend request declined' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: "whoops" })
        }
    }
);

router.get('/search', async (req, res) => {
    try {
        const users = await User.find({ email: req.body.email})
        const user = users[0]
        res.status(200).json({
            id: user._id,
            username: user.username
        })
    } catch (err) {
        console.log(err)
    }
})


//private auth route
router.get('/current', passport.authenticate('jwt', {session: false}), (request, response) => {
  response.json({
      id: request.user.id,
      username: request.user.username,
      email: request.user.email
  });
})

router.get('/:user_id', (req, res) => {
    User.findById(req.params.user_id)
        .then(user => {
            if(user) {
                res.json({
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    location: user.location,
                    events: user.events,
                    friends: user.friends
                })
            }   
        }).catch(err => console.log(err))
})

// router.get('/all_friends', (req, res) => {
//     console.log(req)
//     const currentUserId = jwt.decode(req.get('authorization').split('Bearer ')[1]).id;
//     console.log(currentUserId)
//     if (currentUser) {
//         User.findById(currentUserId)
//         .then(user => {
//             if (user) {
//                 res.json({
//                     friends: user.friends
//                 })
//             } else {
//                 res.json([])
//             }
//         })
//     } else {
//         res.json([])
//     }
// })


module.exports = router;