const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Message = require('../../models/Message');
const validateMessageInput = require("../../validation/messages");

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log(accountSid)
console.log(authToken)
// const myNumber = process.env.twilioNumber
const client = require('twilio')(accountSid, authToken);


router.get("/test", (request, response) => {
    client.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: "+12399849065",
        to: '+13477549416'
    })
    .then(message => console.log(message.sid));
    return response.json({msg: "The messages route is working"})});

router.get("/", (request, response) => {
    Message.find()
        .sort({ date: -1})
        .then( chat => response.json(chat))
        .catch(error => response.status(404).json({ nomessagesfound: 'No messages yet'}));
});

// router.get('/user/:user_id', (request, response) => {
//     Message.find({user: request.params.user_id})
//     .then(messages => response.json(messages))
//     .catch(error => response.status(404).json({ nomessagesfound: "No messages yet from user"}))
// });

router.get('/event/:event_id', (request, response) => {
    Message.find({eventId: request.params.event_id})
    .then(messages => response.json(messages))
    .catch(error => response.status(404).json({ nomessagesfound: "No messages yet from event"}))
});

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (request, response) => {
        const {errors, isValid} = validateMessageInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }

        const newMessage = new Message({
            text: request.body.text,
            sender: request.user.id,
            eventId: request.body.eventId
        });
        newMessage.save().then(message => response.json(message))
    })


module.exports = router;