import * as APIUtil from '../util/events_api_util';
import { getFriendsByUsername } from '../selectors/event_selectors';
import { getPlaces } from '../util/matrix_api_util'
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

// fetch all events in the users events array
export const fetchEventsUserIsInvitedTo = userId => dispatch => {
    return (
        APIUtil.getEventsUserIsInvitedTo(userId)
            .then(events => dispatch(receiveUserEvents(events)))
            .catch(err => console.log(err)) 
    )
}

// fetches all events the user created
export const fetchUserEvents = (userId) => dispatch => {
    

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

export const createAnEvent = (event, currentUser) => (dispatch, getState) => {
//    debugger
// console.log("CREATE EVENT PAYLOAD",event)
    const state = getState() //gives redux state, this is a redux thunk
    const usernames = event.attendees
    const attendees = getFriendsByUsername(state, usernames)
    // console.log(attendees)

    const {email, location, id, username, friends} = currentUser
    const curUser = {
        email, 
        location, 
        username, 
        friends, 
        _id: id
    }
    attendees.unshift(curUser)

    
    event.attendees = attendees;
    // console.log(event)


    // const fakeCreate = Promise.resolve(event)
    // fakeCreate.then(event => {
    //     event.id = Math.floor(Math.random()*100)
    //     dispatch(receiveEvent(event))
    // })
   APIUtil.createEvent(event)
    .then(eventRes => {
        // console.log(eventRes)
        eventRes.data.attendees.forEach(attendee => {
            APIUtil.appendEventToAttendees(eventRes.data._id, attendee)
        })
        dispatch(receiveEvent(eventRes))
    })
    .catch(error => console.log(error))
    // return   APIUtil.createEvent(event)
    // .then(eventRes => {
    //     // console.log(eventRes)
    //     eventRes.data.attendees.forEach( attendee => {
    //         APIUtil.appendEventToAttendees(eventRes.data._id, attendee)
    //     })
    //     // debugger
    //     dispatch(receiveEvent(eventRes))
    // })
    // .catch(error => console.log(error))
}
export const updateAnEvent = (event, currentUser) => (dispatch, getState)=> {
    
    // console.log("UPDATE EVENT PAYLOAD",event)
    const state = getState() //gives redux state, this is a redux thunk
    const usernames = event.attendees
    const attendees = getFriendsByUsername(state, usernames)
    // console.log(attendees)
    
    const {email, location, id, username, friends} = currentUser
    const curUser = {
        email, 
        location, 
        username, 
        friends, 
        _id: id
    }
    attendees.unshift(curUser)

    event.attendees = attendees;
    

  APIUtil.updateEvent(event)
    .then(eventRes => {
        console.log(eventRes)
        dispatch(receiveEvent(eventRes))
    })
    return  APIUtil.updateEvent(event)
    .then(eventRes => {
        // console.log(eventRes)
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