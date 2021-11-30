import { RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGE, RECEIVE_USER_MESSAGES, RECEIVE_EVENT_MESSAGES } from "../actions/message_actions";


const intitalState = {
    all: {},
    user: {},
    new: undefined
};

const messageApiReducer = (state = intitalState, action) => {
    Object.freeze(state);
    let nextState; 
    switch(action.type){
        case RECEIVE_MESSAGES:
            nextState = Object.assign({}, state, action.messages.data);
            return nextState
        case RECEIVE_USER_MESSAGES:
            nextState = Object.assign({}, state, action.messages.data);
            return nextState
        case RECEIVE_EVENT_MESSAGES:
            nextState = Object.assign({}, state, action.messages.data);
            return nextState
        case RECEIVE_NEW_MESSAGE:
            nextState = Object.assign({}, state, {new: action.message.data})
            return nextState
        default:
            return state;
    }



}



export default messageApiReducer;