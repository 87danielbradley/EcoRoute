import axios from "axios";

export const getEvents = () => {
    return axios.get('api/events')
};
export const getUserEvents = userId => {
    return axios.get(`api/events/user/${userId}`)
};

export const createEvent = event => {
    return axios.post('api/events', event)
}

export const updateEvent = event => {
    return axios.patch('api/events', event)
}

export const deleteEvent = eventId => {
    return axios.delete(`api/eventId/${eventId}`)
}


