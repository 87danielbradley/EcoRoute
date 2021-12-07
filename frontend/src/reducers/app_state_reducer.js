import { SET_EDIT_EVENT_ID, SET_MODAL_OPEN_STATUS } from '../actions/app_actions'

const initialState = {
    eventModalOpen: false,
    currentEditEventId : null
}

 const appState = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_OPEN_STATUS:
            if (action.payload) {
                return {
                    ...state,
                    eventModalOpen: action.payload
                }
            } else {
                return {
                    ...state,
                    eventModalOpen: action.payload,
                    currentEditEventId: null
                }
        }
        case SET_EDIT_EVENT_ID:
            // debugger
            return {
                ...state,
                currentEditEventId: action.payload
            }
        default:
            return state;
    }
}

export default appState