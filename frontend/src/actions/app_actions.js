
export const SET_MODAL_OPEN_STATUS = "SET_MODAL_OPEN_STATUS";
export const SET_EDIT_EVENT_ID = "SET_EDIT_EVENT_ID";
export const CLEAR_EDIT_EVENT_ID = "CLEAR_EDIT_EVENT_ID";

export const setModalStatus = (modalOpenStatus = false) => (dispatch) => {
    dispatch({
        type: SET_MODAL_OPEN_STATUS,
        payload: modalOpenStatus
    })
}

export const setEditingEvent = (eventId) => (dispatch) => {
    dispatch({
        type: SET_EDIT_EVENT_ID,
        payload:eventId
    })
}

export const clearEditingEventId = () => (dispatch) => {
    dispatch({
        type: CLEAR_EDIT_EVENT_ID
    })
}