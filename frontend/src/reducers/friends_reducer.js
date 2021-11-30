import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, REMOVE_FRIEND } from "../actions/friend_actions";

const initialState = {
  
  //  1: {
  //   username: 'daniel',
  //   email: 'daniel@email.com',
  //   _id: '6191d63c0900114e7bfdfba1'

  // },
  //  2: {
  //   username: 'sydney',
  //   email: 'sydney@email.com',
  //   _id: "6195e7591d02468955c8bcab"
  // },
  //  3: {
  //   username: 'tyler',
  //   email: 'tyler@email.com',
  //   _id: "6195e7811d02468955c8bcae"
  // },
  //  4: {
  //   username: 'mickey',
  //   email: 'mickey@email.com',
  //   _id: "6195e7e6ff51e61a1df8b0b1"
  // }
  
}



const friendsReducer = (state = initialState, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_FRIEND:
          // look closely at what this out puts may or may not need data
            nextState[action.friend.data._id] = action.friend
            return nextState;


        case RECEIVE_ALL_FRIENDS:
          //  const friends = action.friends.filter(friend => (
          //     friend.friendsState > 0
          //   ))
           action.friends.data.forEach(friend => {
              if (friend.friendsState > 0){
                nextState[friend._id] = friend
              }
            })

            return nextState;

        case REMOVE_FRIEND:
          delete nextState[action.userB] //userB is an id
          return nextState;

          

        default:
            return state
    }
};

export default friendsReducer;