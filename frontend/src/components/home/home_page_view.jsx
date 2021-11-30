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
import { fetchAllFriends } from '../../actions/friend_actions';

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllFriends(this.props.userId)
        console.log(this.props.allState)
    }
    
    render(){
        if (this.props.loggedIn) {
            return(
                <div>
                    <NavBar logout={this.props.logout} loggedIn={this.props.loggedIn}/>
                    <MapboxContainer />
                    <Footer />
                </div>
            )
        } else {
            return(
                <div>
                    <NavBar openModal={this.props.openModal} loggedIn={this.props.loggedIn}/>
                    {/* <NavBar></NavBar> */}
                    <About />
                    <Footer />
                </div>
            )
        }
    }
}

export default HomePage;