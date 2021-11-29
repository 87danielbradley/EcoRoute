const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('message', MessageSchema);
module.exports = Message