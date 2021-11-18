import React from "react";
import * as APIUtil from "../../util/friends_api_util";
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




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

        let name = '';
        for (let i = 0; i < this.state.friend.username.length; i++){
            if (this.state.friend.username[i] === '@'){
                break;
            } else {
                name += this.state.friend.username[i]
            }
        }

        return (
            <div>

      <CardContent className="avatarName"> 
          
           <Avatar className="avatar">{friend.username[0].toUpperCase()}
           </Avatar>
    
          
            <Typography className="friendName"> {name}</Typography>
    
      </CardContent>
    

     
            </div>
        )
    }
};

export default FriendsIndexItem;