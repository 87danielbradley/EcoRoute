import axios from 'axios';

export const signup = (formUser) => (
    axios.post('api/users/register', formUser)
);

export const login = (formUser) => (
    axios.post('/api/users/login', formUser)
);

export const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}