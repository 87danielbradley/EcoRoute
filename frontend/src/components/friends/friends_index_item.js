import React from "react";

class FriendsIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchFriend(this.props.friendId)
    }
    render() {
        const id = this.props.friendId
        const friend = this.props.friends.id
        return (
            <div>
                <div>
                    {friend.username}
                </div>
            </div>
        )
    }
};

export default FriendsIndexItem;