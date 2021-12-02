const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateEventInput = require("../../validation/events");
const Event = require("../../models/Event");
const { Passport } = require('passport');


router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }
        
        const newEvent = new Event({
            user: req.user.id,
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            attendees: req.body.attendees,
            hidden: req.body.hidden
        });

        newEvent.save().then(event => res.json(event));
    }
)

router.get('/user/:user_id', (req, res) => {
    
    Event.find({user: req.params.user_id})
        .populate('attendees', '-password')
        .sort({ date: -1 })
        .then( events => res.json(events))
        .catch( err => {
            res.status(404).json({ eventsnotfound: 'This user has not created an event'})
        })

});

router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch( err => {
            res.status(404).json({ noeventfound: "This event is either private or taken down by the creator"})
        })
});

router.delete("/:id", (req, res) => {
    
    const {id} = req.params
    Event.findOneAndDelete({_id: id})
        .then(() => res.status(200).json({sucess: "Event successfully deleted"}))
        .catch(err => {res.json(err)})
});

router.put("/:id", (req, res) => {
     Event.findByIdAndUpdate(req.params.id, req.body)
     .then(event => res.json(event))
     .catch(err => res.json(err))

})




module.exports = router;

