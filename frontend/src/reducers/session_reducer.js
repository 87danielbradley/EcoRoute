import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';


const SessionReducer = combineReducers({
    session: sessionApiReducer
})

export default SessionReducer;