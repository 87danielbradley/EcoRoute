import React from "react";
import { Link } from "react-router-dom";
import "./messages.css"
import MessagesViewItem from "./message_view_item";

class MessagesView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }
    componentDidMount(){
        this.props.fetchMessages();
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({messages: newState.messages})
    // }

    render(){
        if (this.state.messages.length === 0) {
            return (<div>You have no new messages</div>)
        } else {
        return(
            <div>
                <h3>Messages</h3>
                {this.state.messages.map((message) =>(
                    <MessagesViewItem text={message.text} />
                ))}
            </div>
        )
    }}

}

export default MessagesView;