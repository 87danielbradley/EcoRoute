import React from "react";

class FriendsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friend: null
        }
    }

    componentDidMount() {
        this.props.fetchFriend(this.props.friendId)
            .then( friend => this.setState({ friend: friend }))
    }
    render() {
        if(this.state.friend === null) return null
        const friend = this.state.friend
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