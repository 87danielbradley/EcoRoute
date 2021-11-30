import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, REMOVE_FRIEND } from "../actions/friend_actions";

const initialState = {
  
  //  1: {
  //   username: 'daniel',
  //   email: 'daniel@email.com',
  //   _id: '61a694e530c1e433c5717a10'

  // },
  //  2: {
  //   username: 'sydney',
  //   email: 'sydney@email.com',
  //   _id: "61a694fd30c1e433c5717a14"
  // },
  //  3: {
  //   username: 'tyler',
  //   email: 'tyler@email.com',
  //   _id: "61a6954230c1e433c5717a1c"
  // },
  //  4: {
  //   username: 'mickey',
  //   email: 'mickey@email.com',
  //   _id: "61a6951730c1e433c5717a18"
  // }
  
}



const friendsReducer = (state = initialState, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_FRIEND:
          // look closely at what this out puts may or may not need data
            nextState[action.friend.id] = action.friend
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