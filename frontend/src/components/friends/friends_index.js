import React from "react";
import FriendsIndexItem from "./friends_index_item";

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // // 
        const friend = Object.values(this.props.friends).map( (friend, idx) => (
            <FriendsIndexItem 
                key={idx} 
                friend={friend} 
                removeFriend={this.props.removeFriend} 
                acceptFriend={this.props.acceptFriend}
                currentUserId ={this.props.currentUser}
            />
        ))

        return (
            <ul>
                {friend}
            </ul>
        )
    }
};

export default FriendsIndex;