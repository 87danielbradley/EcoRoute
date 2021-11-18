import React from "react";
import * as APIUtil from "../../util/friends_api_util";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";




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
                <Card className="cardFriends" sx={{ maxWidth: 345 }} >
                    {/* <Divider> */}

                    <CardContent className="avatarName"> 
                      <Avatar className="avatar">{friend.username[0].toUpperCase()}</Avatar>
                      <Typography className="friendName"> {name}</Typography>
                    </CardContent>    
                    {/* </Divider> */}
                </Card>

    

     
            </div>
        )
    }
};

export default FriendsIndexItem;