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

    status: {
      type: Number,
      nums: [
        0, // add a Friend
        1, // pending request 
        2, // friend requested
        3 // friendship accepted
      ]
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('FriendRequest', FriendRequestSchema)