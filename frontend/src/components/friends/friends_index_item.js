import React from "react";
import * as APIUtil from "../../util/friends_api_util";

class FriendsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friend: null
        }
    }

    componentDidMount() {
        APIUtil.getFriend()
         APIUtil.getFriend(this.props.friendId)
            .then( response => {
                console.log("friends!!!", response.data)
                this.setState({ friend: response.data })
            })
    }
    render() {
        if(!this.state.friend) return null
        const friend = this.state.friend
        return (
            <div>
                <div>
                    {/* {friend.username} */}
                   {friend.username}
                </div>
            </div>
        )
    }
};

export default FriendsIndexItem;