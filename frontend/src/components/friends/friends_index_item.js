import React from "react";

class FriendsIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchFriend(this.props.friendId)
    }
    render() {
        return null
    }
};

export default FriendsIndexItem;