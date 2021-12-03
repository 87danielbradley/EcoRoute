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
        location: [],


        date: {
            type: Date,
            default: Date.now
        },

        attendees: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],


        hidden: Boolean
    },
    {
        timestamps: true
    }
)

module.exports = Event = mongoose.model(
    'Event',
    EventSchema
);

