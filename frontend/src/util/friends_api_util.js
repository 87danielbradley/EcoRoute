import axios from "axios";

// adds friends
export const sendFriendRequest = (userId) => {
    return axios.get(`/api/users/friend_request/${userId}`)
};

export const getFriend = user_Id => {
    return axios.get(`/api/users/${user_Id}`)
};

export const getAllFriends = (userId) => {
    return axios.get(`/api/users/all_friends/${userId}`) //gets all the friends for the userId we input
}



export const searchUsersByEmail = (formEmail) => (
    axios.get('/api/users/search', formEmail)
);

export const acceptFriendRequest = (userId, userB) => {
    
    return axios.patch(`/api/users/friend_request/${userId}/accept`, userB)
};

// export const cancelFriendRequest = requestId => {
//     axios.get(`/api/users/${requestId}/cancel`)
// };

export const declineFriendRequest = (userId)=> {
    
    return axios.delete(`/api/users/friend_request/${userId}/decline`)
};
