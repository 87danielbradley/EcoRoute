
export const SET_MODAL_OPEN_STATUS = "SET_MODAL_OPEN_STATUS";
export const SET_EDIT_EVENT_ID = "SET_EDIT_EVENT_ID";

export const setModalStatus = (modalOpenStatus) => ({
        type: SET_MODAL_OPEN_STATUS,
        payload: modalOpenStatus
})

export const setEditingEvent = (eventId) => ({
        type: SET_EDIT_EVENT_ID,
        payload:eventId
})
