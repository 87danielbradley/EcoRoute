import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';


const SessionReducer = combineReducers({
    session: sessionApiReducer
})

export default SessionReducer;


// This file is currently not being referenced.  May be consolidated at some point.