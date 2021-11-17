import axios from "axios";

export const sendFriendRequest = userId => {
    return axios.get(`/api/users/friend_request/${userId}`)
};

export const acceptFriendRequest = requestId => {
    return axios.get(`/api/users/friend_request/${requestId}/accept`)
};

export const cancelFriendRequest = requestId => {
    axios.get(`/api/users/${requestId}/cancel`)
};

export const declineFriendRequest = requestId => {
    return axios.get(`/api/users/${requestId}/decline`)
};