import React from "react";
import { Link } from "react-router-dom";
import "./messages.css"
import MessagesViewItem from "./message_view_item";

class MessagesView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            messages: null,
            text: '',
            eventId: null
        }
        // this.state = {
        //     messages: props.messages,
        //     text: '',
        //     eventId: props.eventId
        // }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        // this.props.fetchMessages()
        console.log(`componentDidMount`)
        console.log(this.state)
        console.log(this.props)
        this.props.fetchEventMessages(this.props.eventId)
            .then(response => {
            // .then(response => console.log(response));
                
                // return(this.setState({messages: response.messages.data}))
                console.log(response)
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

    componentDidUpdate(prevProps){
        console.log(`componentDidUpdate`)
        console.log("state", this.state)
        console.log("messages", this.state.messages)
        console.log("eventId", this.props.eventId)
        if (this.props.eventId !== prevProps.eventId){
            // debugger
            // this.setState({eventId: this.props.eventId,
            // messages: this.props.messages})
            this.props.fetchEventMessages(this.props.eventId)
                .then(response => {
                    // .then(response => console.log(response));

                    return (this.setState({ eventId: this.props.eventId, messages: response.messages.data }))
                });
        }
    }
    render(){
        
        if (!this.state.messages) {
        // if (this.state.messages.length === 0) {
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