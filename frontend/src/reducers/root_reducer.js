import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import ErrorsReducer from './errors_reducer'
import messageApiReducer from "./message_api_reducer"
import EventsReducer from './events_reducer';
import friendsReducer from './friends_reducer';
const RootReducer = combineReducers({
    messages: messageApiReducer,
    session: sessionApiReducer,
    errors: ErrorsReducer, 
    events: EventsReducer,
    frineds: friendsReducer
})

export default RootReducer;



