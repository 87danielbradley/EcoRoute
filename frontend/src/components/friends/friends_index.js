import React from "react";
import FriendsIndexItem from "./friends_index_item";

class FriendsIndex extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
     
        this.props.fetchAllFriends(this.props.currentUser)
    }

    render() {


        return (
            <ul>
                <FriendsIndexItem/>
            </ul>
        )
    }
};

export default FriendsIndex;