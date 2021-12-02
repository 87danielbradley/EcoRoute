import axios from "axios";

export const searchUsers = email => {
    return axios.get(`/api/users/search?email=${email}`)
}