import React from "react";
import EventIndexItem from "./event_index_item";
import { connect } from "react-redux";
import { fetchUserEvents, deleteAnEvent, fetchEventsUserIsInvitedTo} from "../../actions/event_actions";
import { setEditingEvent, setModalStatus }  from '../../actions/app_actions'
import { fetchFriend, sendRequest } from '../../actions/friend_actions'
import CreateEventModal from './create_event_modal'
import './home.css'

class EventIndex extends React.Component{

    componentDidMount(){
        // const { currentUser} = this.props
        // this.props.fetchFriendRequest('619536e7cc98bcda226fcff3');
        // this.props.fetchFriends(currentUser.id);
        this.props.fetchUserEvents(this.props.currentUser.id)
            .then(() => this.props.fetchEventsUserIsInvitedTo(this.props.currentUser.id))
        // this.props.currentUser.friends.map( friend => {
        //     this.props.fetchUser(friend)
        // })
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.events.length !== prevProps.events.length) {
            this.props.fetchUserEvents(this.props.currentUser.id)
                .then(() => this.props.fetchEventsUserIsInvitedTo(this.props.currentUser.id))
        }
    }

    render(){

        const { events, deleteEvent, openModalAndEditEvent } = this.props;
           
  
       

        return(
     
            <div className="event-index-item">
                <div className="events-header">
                    <h1 className="table-element">Events</h1>
                    <span><CreateEventModal /></span>
                </div>

                {
                    events.map((event, i) => {
                        return (event !== undefined && 
                        <EventIndexItem 
                            key={i} event={event}
                            currentUser={this.props.currentUser.id} 
                            eventIndex={i}
                            deleteEvent={deleteEvent}
                            openModalAndEditEvent={openModalAndEditEvent}
                            updateMap={index => this.props.updateMap(index)}
                            
                        />)
                    })
                }

            </div>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        // eventsL: Object.values(state.events),
//         events: Object.values(state.events).sort(function (a, b) {
//   return new Date(a.date) - new Date(b.date);
// }),
        // events: Object.values(state.events).filter(event => event.attendees.includes(state.session.user.id)),
        currentUser: state.session.user,
        friends: Object.values(state.friends).filter(friend => friend.username).filter(name => name !== undefined)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchFriendRequest: (userId) => dispatch(sendRequest(userId)),
        fetchFriends: (userId) => dispatch(fetchFriend(userId)),
        fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
        deleteEvent: (eventId) => dispatch(deleteAnEvent(eventId)),
        fetchEventsUserIsInvitedTo: (userId) => dispatch(fetchEventsUserIsInvitedTo(userId)),
        openModalAndEditEvent: (eventId) => { 
            dispatch(setEditingEvent(eventId));
            dispatch(setModalStatus(true))
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
