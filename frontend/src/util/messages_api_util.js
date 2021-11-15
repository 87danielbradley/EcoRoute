import axios from 'axios';

export const getMessages = () => {
    return axios.get('/api/messages')
};

export const getUserMessages = (userId) => (
    axios.get(`/api/messages/user/${userId}`)
);

export const writeMessage = (message) => (
    axios.post('/api/messages/', message)
)