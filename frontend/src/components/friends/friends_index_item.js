import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';





class FriendsIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.friend

        this.handleDelete = this.handleDelete.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
    }

    handleDelete(e) {
        e.preventDefault()
        this.props.removeFriend(this.props.curentUserId, this.state._id )
    }

    handleAccept(e) {
        e.preventDefault()
        this.setState({ friendsState: 3 })
        this.props.acceptFriend(this.props.curentUserId, this.state._id)
    }

    render() {
        // debugger
        

        const friend = this.state

        let name = '';
        for (let i = 0; i < friend.username.length; i++){
            if (friend.username[i] === '@'){
                break;
            } else {
                name += friend.username[i]
            }
        }
        
        if(friend.friendsState == 3) {
            return (
                <div>
                    <Card className="cardFriends" sx={{ maxWidth: 345 }} >
                        <Divider>

                            <CardContent className="avatarName"> 
                                <Avatar className="avatar">{friend.username[0].toUpperCase()}</Avatar>
                                <Typography className="friendName">{name}</Typography>
                                <button onClick={this.handleDelete}>Delete Friend</button>
                            </CardContent>    
                        </Divider>
                    </Card> 
                </div>
            ) 
        } else if (friend.friendsState == 2) {
            return (
                <div>
                    <Card className="cardFriends" sx={{ maxWidth: 345 }} >
                        <Divider>

                            <CardContent className="avatarName"> 
                                <Avatar className="avatar">{friend.username[0].toUpperCase()}</Avatar>
                                <Typography className="friendName">{name}</Typography>
                                <button onClick={this.handleAccept}>Accept Friend</button>
                            </CardContent>    
                        </Divider>
                    </Card> 
                </div>
            )
        }else if (friend.friendsState == 1) {
            return (
                <div>
                    <Card className="cardFriends" sx={{ maxWidth: 345 }} >
                        <Divider>

                            <CardContent className="avatarName"> 
                                <Avatar className="avatar">{friend.username[0].toUpperCase()}</Avatar>
                                <Typography className="friendName">{name}</Typography>
                                <button onClick={this.handleAccept}>Accept Friend</button>
                            </CardContent>    
                        </Divider>
                    </Card> 
                </div>
            ) 
        }else {
            return (
                null
            )
        }


    }
};

export default FriendsIndexItem;