import React from "react";
// import { Link } from "react-router-dom";
import "./messages.css"

class MessagesViewItem extends React.Component{
 

    render(){
        (document.getElementById("message-view-box")? document.getElementById("message-view-box").scrollTop = document.getElementById("message-view-box").scrollHeight:console.log(''))
        
        const ownMessage = (this.props.currentUser.id === this.props.message.sender ? 'message-item-left' : 'message-item-right')
        // const ownMessage = (this.props.currentUser.id === this.props.message.sender ? 'true' : 'false')
        
        
        return(
            <div className='message-container'>
                <div className={ownMessage}>
                    <div className={`${ownMessage}-child`}>
                        {this.props.text}
                    </div>
                    <div></div>
                    
                </div>
            </div>
        )
    }

}

export default MessagesViewItem;