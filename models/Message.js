const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    conversationId: {
        type: Schema.Types.ObjectId,
        ref: 'conversations'
    },
    body: {
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