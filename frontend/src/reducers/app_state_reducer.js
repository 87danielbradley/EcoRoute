import { SET_EDIT_EVENT_ID, SET_MODAL_OPEN_STATUS,CLEAR_EDIT_EVENT_ID } from '../actions/app_actions'

const initialState = {
    eventModalOpen: false,
    currentEditEventId : null
}

 const appState = (state = initialState, action) => {

    switch (action.type) {
        case SET_MODAL_OPEN_STATUS:
            return {
                ...state,
                eventModalOpen: action.payload
            }
        case SET_EDIT_EVENT_ID:
            return {
                ...state,
                currentEditEventId: action.payload
            }
        case CLEAR_EDIT_EVENT_ID:
            return {
                ...state,
                currentEditEventId: null
            }
        default:
            return state;
    }
}

export default appState