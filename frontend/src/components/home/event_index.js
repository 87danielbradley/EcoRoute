import React from "react";
import EventIndexItem from "./event_index_item";
import { connect } from "react-redux";
import { fetchUserEvents, deleteAnEvent} from "../../actions/event_actions";
class EventIndex extends React.Component{

    componentDidMount(){
     
        this.props.fetchUserEvents(this.props.currentUser.id);
    }

    render(){

        const {events, deleteEvent} = this.props;
        // console.log(events)

        return(
            <div>
                <h1>Events</h1>

                {
                    events.map((event, i) => {
                        return (event !== undefined && <EventIndexItem key={i} event={event} deleteEvent={deleteEvent} />)
                    })
                }

            </div>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        // events: state.events.events
        events: Object.values(state.events),
        currentUser: state.session.user
        // currentUser: state.session.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
        deleteEvent: (eventId) => dispatch(deleteAnEvent(eventId))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
