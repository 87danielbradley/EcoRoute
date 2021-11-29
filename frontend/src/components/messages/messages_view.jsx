import React from "react";
import { Link } from "react-router-dom";
import "./messages.css"
import MessagesViewItem from "./message_view_item";

class MessagesView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            text: '',
            eventId: props.eventId
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        // this.props.fetchMessages()
        // debugger
        this.props.fetchEventMessages(this.state.eventId)
            .then(response => {
                
                return(this.setState({messages: response.messages.data}))
                });
    }
    // componentWillReceiveProps(newState) {
    //     this.setState({messages: newState.messages})
    // }


    update() {
        return (event) => this.setState({
            text: event.currentTarget.value
        })

    };
    handleSubmit(event){
        event.preventDefault();
        this.props.createMessage({text: this.state.text,
        eventId: this.state.eventId});
        this.setState({text: this.state.text})
        
    }
    render(){
        
        if (this.state.messages.length === 0) {
            return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="temp-input" 
                        type="text"
                        onChange={this.update()}>
                    </input>
                    <input type="submit" value="&#9998;"></input>
                </form>
                You have no new messages
            </div>)
        } else {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="temp-input" 
                        type="text"
                        onChange={this.update()}>
                    </input>
                    <input type="submit" value="&#9998;"></input>
                </form>
               
                {this.state.messages.map((message) =>(
                    <MessagesViewItem text={message.text} />
                ))}
            </div>
        )
    }}

}

export default MessagesView;