import React from "react";
import EventIndexItem from "./event_index_item";
import { connect } from "react-redux";
import { fetchUserEvents } from "../../actions/event_actions";
class EventIndex extends React.Component{

    componentDidMount(){
        this.props.fetchUserEvents();
    }

    render(){

        const {events} = this.props;
        console.log(events)

        return(
            <div>
                <h1>Events</h1>

                {
                    events.reverse().map((event, i) => {
                        return (event !== undefined && <EventIndexItem key={i} event={event} />)
                    })
                }

            </div>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        // events: state.events.events
        events: Object.values(state.events)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchUserEvents: () => dispatch(fetchUserEvents())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
