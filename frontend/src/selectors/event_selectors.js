export const getFriends = state => {
    return state.friends    //from the state(object of friends objects)
}

export const getFriendByUsername = (state,username) => {
    const friends = getFriends(state); 
    const friend = Object.values(friends).filter(friend => friend.username === username)
    console.log(friend)
    return friend[0] 
}


export const getFriendsByUsername = (state, usernames = []) => { //usernames are attendees
    const friends = usernames.map(username => getFriendByUsername(state, username))
    console.log("my friends",friends)
    return friends

}



//see createEvent in actions