import React from "react";
import { Link } from "react-router-dom";
import "./messages.css"

class MessagesViewItem extends React.Component{
 

    render(){
        return(
            <div>
                {this.props.body}
            </div>
        )
    }

}

export default MessagesViewItem;