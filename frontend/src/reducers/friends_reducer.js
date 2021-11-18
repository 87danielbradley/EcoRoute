import { RECEIVE_FRIEND } from "../actions/friend_actions";

const friendsReducer = (state = {}, action) => {
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