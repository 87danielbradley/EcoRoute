import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import ErrorsReducer from './errors_reducer'
import messageApiReducer from "./message_api_reducer"
import EventsReducer from './events_reducer';
import ModalReducer from './modal_reducer';
import AppStateReducer from './app_state_reducer';

const RootReducer = combineReducers({
    messages: messageApiReducer,
    session: sessionApiReducer,
    errors: ErrorsReducer, 
    events: EventsReducer,
    modal: ModalReducer,
    appState: AppStateReducer
})

export default RootReducer;



