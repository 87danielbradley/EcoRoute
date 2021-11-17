const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FriendRequestSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isPending: {
      type: Boolean,
      default: false, // sending the friend request becomes true
    },
    isAccepted: {
      type: Boolean,
      default: false, // accepting the friend request because true
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('FriendRequest', FriendRequestSchema)