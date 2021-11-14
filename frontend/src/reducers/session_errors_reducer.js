import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER  } from "../actions/session_actions";

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}



export default SessionErrorsReducer;