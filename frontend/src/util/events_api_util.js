import axios from "axios";

export const getEvents = () => {
    return axios.get('api/events')
};
export const getEvent = (eventId) => {
    return axios.get(`api/events/${eventId}`)
};

export const createEvent = event => {
    return axios.post('api/events')
}

export const updateEvent = event => {
    return axios.patch('api/events')
}

export const deleteEvent = eventId => {
    return axios.delete(`api/eventId/${eventId}`)
}


