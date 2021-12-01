import * as APIUtil from '../util/events_api_util';
import { getFriendsByUsername } from '../selectors/event_selectors';
import { getPlaces,  getMatrix } from '../util/matrix_api_util'
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

export const searchEventLocation = (query, userLocation, attendees) => (dispatch, getState) => {
    // ensure user object has location
    //42.239690   -71.815211 
    const nearbyString = ['42.239690', '-71.815211 '].join(',')
    getPlaces(query, nearbyString).then(response => {
        console.log(response)
    })
}

export const createAnEvent = (event) => (dispatch, getState) => {
    debugger
console.log("CREATE EVENT PAYLOAD",event)
    const state = getState() //gives redux state, this is a redux thunk
    const usernames = event.attendees
    const attendees = getFriendsByUsername(state, usernames)
    console.log(attendees)

    event.attendees = attendees;
    console.log(event)


    // const fakeCreate = Promise.resolve(event)
    // fakeCreate.then(event => {
    //     event.id = Math.floor(Math.random()*100)
    //     dispatch(receiveEvent(event))
    // })
    return APIUtil.createEvent(event)
    .then(eventRes => {
        console.log(eventRes)

        dispatch(receiveEvent(eventRes))
    })
    .catch(error => console.log(error))
}
export const updateAnEvent = (event) => (dispatch, getState)=> {
    debugger
    console.log("UPDATE EVENT PAYLOAD",event)
    const state = getState() //gives redux state, this is a redux thunk
    const usernames = event.attendees
    const attendees = getFriendsByUsername(state, usernames)
    console.log(attendees)

    event.attendees = attendees;
    console.log(event)

    return APIUtil.updateEvent(event)
    .then(eventRes => {
        console.log(eventRes)
        dispatch(receiveEvent(eventRes))
    })
}
export const deleteAnEvent = (eventId) => dispatch => {
    

    // const fakeDelete = Promise.resolve(eventId)
    // fakeDelete.then(() => dispatch(removeEvent(eventId)))
    return APIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
    .catch(error => console.log(error))

}