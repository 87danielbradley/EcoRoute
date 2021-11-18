import axios from "axios";

// adds friends
export const sendFriendRequest = userId => {
    return axios.get(`/api/users/friend_request/${userId}`)
};

export const getFriend = user_Id => {
    return axios.get(`/api/users/${user_Id}`)
};

export const getAllFriends = () => {
    return axios.get(`/api/users/all_friends`)
}

export const searchUsersByEmail = (formEmail) => (
    axios.get('/api/users/search', formEmail)
);

// export const acceptFriendRequest = requestId => {
//     return axios.get(`/api/users/friend_request/${requestId}/accept`)
// };

// export const cancelFriendRequest = requestId => {
//     axios.get(`/api/users/${requestId}/cancel`)
// };

// export const declineFriendRequest = requestId => {
//     return axios.get(`/api/users/${requestId}/decline`)
// };