import React, { Component } from 'react';
import EventForm from './event_form';

export default class EventContainer extends Component {
    render() {
        return (
            <div className="columns">
            <div className="column"></div>

            <div className="column is-two-thirds">
                <EventForm/>
                
            </div>
            <div className="column">  </div>

          
            </div>
       
        )
    }
}

