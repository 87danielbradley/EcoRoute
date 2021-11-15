import { combineReducers } from 'redux';
import sessionApiReducer from './session_api_reducer';
import ErrorsReducer from './errors_reducer'

const RootReducer = combineReducers({
    session: sessionApiReducer,
    errors: ErrorsReducer
})

export default RootReducer;