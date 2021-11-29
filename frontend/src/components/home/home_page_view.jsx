import React from 'react';
// import EventForm from './event_form';
// import EventIndex from './event_index';
import CreateEventModal from './create_event_modal'
import MapboxContainer from '../mapbox/mapbox_container';
import EventFormContainer from './event_form_container';
import FriendIndexContainer from '../friends/friends_index_container'
import NavBar from '../navbar/navbar_view';
import About from '../about/about';
import Footer from '../footer/footer';

class HomePage extends React.Component{



    render(){
        return(
            
                <div>
                    {/* Home Page

                    <div className="columns">
                        <div className="column"></div>

                        <div className="column is-two-thirds">
                            <div className="createEvent">
                        
                            <CreateEventModal />
                            </div>
                            
                        </div>
                        <div className="column">  </div>

            
                    </div> */}
                    {/* <MapboxContainer /> */}
                    <NavBar></NavBar>
                    <About></About>
                    <Footer></Footer>
                </div>
            
        )
    }
}

export default HomePage;