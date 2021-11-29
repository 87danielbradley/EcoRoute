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
        1, // friend requested
        2, // pending request
        3 // friendship accepted
      ]
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('FriendRequest', FriendRequestSchema)