import axios from "axios";

// export const getEvents = () => {
//     return axios.get('api/events')
// };
export const getUserEvents = userId => {
   
    return axios.get(`/api/events/user/${userId}`)
};

export const getEventsUserIsInvitedTo = userId => {
    return axios.get(`/api/users/events/${userId}`)
}

export const getEvent = eventId => {
    return axios.get(`/api/events/${eventId}`)
}
export const createEvent = event => {
    return axios.post(`/api/events/`, event)
}

export const updateEvent = event => {
    return axios.put(`/api/events/${event._id}`, event)
}

export const deleteEvent = eventId => {
    
    return axios.delete(`/api/events/${eventId}`)
}

export const appendEventToAttendees = (eventId, attendeesId) => {
    // debugger
    return axios.patch(`/api/users/attendees/${eventId}`, { id: attendeesId})
}


