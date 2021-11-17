import axios from "axios";

// export const getEvents = () => {
//     return axios.get('api/events')
// };
export const getUserEvents = userId => {
   
    return axios.get(`/api/events/user/${userId}`)
};

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
    debugger
    return axios.delete(`/api/events/${eventId}`)
}


