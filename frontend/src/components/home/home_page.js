import React from 'react';
// import EventForm from './event_form';
import EventIndex from './event_index';
import MapboxContainer from '../mapbox/mapbox_container';
import EventFormContainer from './event_form_container';

class HomePage extends React.Component{



    render(){
        return(
            
                <div>
                    {/* Home Page
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column is-two-thirds">
                            <EventFormContainer/>
                            <EventIndex/>
                            
                        </div>
                        <div className="column">  </div>
            
                    </div> */}
                    <MapboxContainer />
                </div>
            
        )
    }
}

export default HomePage;