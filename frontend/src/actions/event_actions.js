import * as APIUtil from '../util/events_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";



export const receiveAllEvents = events => ({
    type: RECEIVE_ALL_EVENTS,
    events
})


export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})


export const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
})


export const fetchEvents = () => dispatch => {
    return APIUtil.getEvents()
    .then(events => dispatch(receiveAllEvents(events)))
    .catch(error => console.log(error))
}
export const fetchEvent = (eventId) => dispatch => {
    return APIUtil.getEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
    .catch(error => console.log(error))
}
export const createAnEvent = (event) => dispatch => {
    return APIUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)))
    .catch(error => console.log(error))
}
export const updateAnEvent = (event) => dispatch => {
    return APIUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
}
export const deleteAnEvent = (eventId) => dispatch => {
    return APIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
    .catch(error => console.log(error))

}