import React from "react";
import FriendsIndexItem from "./friends_index_item";

class FriendsIndex extends React.Component {
    render() {

        const friend = this.props.friendIds.map( (friend, idx) => {
            return (
                <li>
                    <FriendsIndexItem 
                        key={idx} 
                        friendId={friend}
                        fetchFriend={this.props.fetchFriend}
                    />
                </li>
            )
        })

        return (
            <ul>
                {friend}
            </ul>
        )
    }
};

export default FriendsIndex;