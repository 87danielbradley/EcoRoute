const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Message = require('../../models/Message');
const validateMessageInput = require("../../validation/messages");

router.get("/test", (request, response) => response.json({msg: "The messages route is working"}));

router.get("/", (request, response) => {
    Message.find()
        .sort({ date: -1})
        .then( chat => response.json(chat))
        .catch(error => response.status(404).json({ nomessagesfound: 'No messages yet'}));
});

router.get('/user/:user_id', (request, response) => {
    Message.find({user: request.params.user_id})
    .then(messages => response.json(messages))
    .catch(error => response.status(404).json({ nomessagesfound: "No messages yet from user"}))
});

router.get('/event/:event_id', (request, response) => {
    Message.find({event: request.params.event_id})
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