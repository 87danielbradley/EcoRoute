import React from "react";
import FriendsIndexItem from "./friends_index_item";

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        Object.values(this.props.friends).map( friend => {
            this.props.sendRequest(friend._id)
                .catch(() => console.log('happy mistakes'))
        });
    }

    render() {
        if(!this.props.friendId) return null
        const friend = this.props.friendIds.map( (friend, idx) => (
                <div>
                <li>
                    <FriendsIndexItem 
                        key={idx} 
                        friendId={friend}
                        fetchFriend={this.props.fetchFriend}
                    />
                </li>
                </div>
        ))

        return (
            <ul>
                {friend}
            </ul>
        )
    }
};

export default FriendsIndex;