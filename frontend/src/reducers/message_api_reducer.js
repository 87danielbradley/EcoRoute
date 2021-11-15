import { RECIEVE_MESSAGES, RECIEVE_NEW_MESSAGE, RECIEVE_USER_MESSAGES } from "../actions/message_actions";


const intitalState = {
    all: {},
    user: {},
    new: undefined
};

const messageApiReducer = (state = intitalState, action) => {
    Object.freeze(state);
    let nextState; 
    switch(action.type){
        case RECIEVE_MESSAGES:
            nextState = Object.assign({}, state, action.messages.data);
            return nextState
        case RECIEVE_USER_MESSAGES:
            nextState = Object.assign({}, state, action.messages.data);
            return nextState
        case RECIEVE_NEW_MESSAGE:
            nextState = Object.assign({}, state, {new: action.message.data})
            return nextState
        default:
            return state;
    }



}



export default messageApiReducer;