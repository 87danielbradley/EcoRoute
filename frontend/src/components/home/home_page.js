import React from 'react';
import EventForm from './event_form';
import EventIndex from './event_index';


class HomePage extends React.Component{



    render(){
        return(
            <div>
                Home Page

            <div className="columns">
            <div className="column"></div>

            <div className="column is-two-thirds">
                <EventForm/>
                <EventIndex/>
                
            </div>
            <div className="column">  </div>

          
            </div>
            </div>
        )
    }
}

export default HomePage;