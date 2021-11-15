const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        category: {
            type: String
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        date: {
            type: Date,
            default: Date.now
        },

        hidden: Boolean
    }
)

module.exports = Event = mongoose.model(
    'Event',
    EventSchema
);

