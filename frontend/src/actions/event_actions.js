import * as APIUtil from '../util/events_api_util';

export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";


export const receiveUserEvents = events => ({
    type: RECEIVE_USER_EVENTS,
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


export const fetchUserEvents = (userId) => dispatch => {
    // console.log('fetching user events')

    return (
        APIUtil.getUserEvents(userId)
        .then(events => dispatch(receiveUserEvents(events)))
        .catch(error => console.log(error))
    )
}

export const fetchEvent = eventId => dispatch => {
    return APIUtil.getEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
}

export const createAnEvent = (event) => dispatch => {
    // const fakeCreate = Promise.resolve(event)
    // fakeCreate.then(event => {
    //     event.id = Math.floor(Math.random()*100)
    //     dispatch(receiveEvent(event))
    // })
    return APIUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)))
    .catch(error => console.log(error))
}
export const updateAnEvent = (event) => dispatch => {
    // const fakeUpdate = Promise.resolve(event);
    // fakeUpdate.then(event => {
    //     dispatch(receiveEvent(event))
    // })
    return APIUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
}
export const deleteAnEvent = (eventId) => dispatch => {
    

    // const fakeDelete = Promise.resolve(eventId)
    // fakeDelete.then(() => dispatch(removeEvent(eventId)))
    return APIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
    .catch(error => console.log(error))

}