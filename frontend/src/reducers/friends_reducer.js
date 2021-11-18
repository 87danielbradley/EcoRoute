import { RECEIVE_FRIEND } from "../actions/friend_actions";

const initialState = {
  //  1: {
  //   username: 'daniel',
  //   email: 'daniel@email.com',
  //   _id: '6191d63c0900114e7bfdfba1',
  //   attendees: []

  // },
  //  2: {
  //   username: 'sydney',
  //   email: 'sydney@email.com',
  //   _id: "6195e7591d02468955c8bcab",
  //   attendees: []
  // },
  //  3: {
  //   username: 'tyler',
  //   email: 'tyler@email.com',
  //   _id: "6195e7811d02468955c8bcae",
  //   attendees: []
  // },
  //  4: {
  //   username: 'mickey',
  //   email: 'mickey@email.com',
  //   _id: "6195e7e6ff51e61a1df8b0b1",
  //   attendees: []
  // }
  
}



const friendsReducer = (state = initialState, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_FRIEND:
            nextState[action.friend.id] = action.friend
            return nextState
        default:
            return state
    }
};

export default friendsReducer;