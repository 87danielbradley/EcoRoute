import { combineReducers } from "redux";
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer
})

//not being referenced atm