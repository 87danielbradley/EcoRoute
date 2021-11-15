import React from 'react';
import EventContainer from './event_container';

class HomePage extends React.Component{



    render(){
        return(
            <div>
                Home Page
                <EventContainer/>
            </div>
        )
    }
}

export default HomePage;