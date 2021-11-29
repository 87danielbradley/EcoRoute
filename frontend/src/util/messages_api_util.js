import axios from 'axios';

export const getMessages = () => {
    return axios.get('/api/messages')
};

export const getUserMessages = (userId) => (
    axios.get(`/api/messages/user/${userId}`)
);
export const getEventMessages = (eventId) => (
    axios.get(`/api/messages/event/${eventId}`)
);

export const writeMessage = (message) => (
    axios.post('/api/messages/', message)
)