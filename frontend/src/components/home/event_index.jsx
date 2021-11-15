import React from "react";
import { EventIndexItem } from "./event_index_item";
export default class EventIndex extends React.Component{

    componentDidMount(){
        this.props.fetchUserEvents();
    }

    render(){

        const {events} = this.props;

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

