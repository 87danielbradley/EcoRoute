const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');

router.get("/test", (request, response) => response.json({msg: "The users route is working"}));

router.post('/register', (request, response) => {
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
                        } else {
                            return response.status(400).json({password: "Password and email combination is incorrect"});
                        }
                    })
            })
    })



module.exports = router;