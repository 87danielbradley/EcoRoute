import React from 'react';
// import EventForm from './event_form';
// import EventIndex from './event_index';
// import CreateEventModal from './create_event_modal'
import MapboxContainer from '../mapbox/mapbox_container';
// import EventFormContainer from './event_form_container';
// import FriendIndexContainer from '../friends/friends_index_container'
import NavBar from '../navbar/navbar_view';
import About from '../about/about';
import Footer from '../footer/footer';
import { fetchAllFriends } from '../../actions/friend_actions';
import { set } from 'date-fns';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num: null
        }
    }

    componentDidMount(){
        if(this.props.loggedIn) {
            this.props.fetchAllFriends(this.props.userId)
                .then(() => this.setState({ num: 1 }))
        }
        console.log(this.props.allState)
    }
    
    render(){
        debugger
        if (this.props.loggedIn) {
            // this.props.fetchAllFriends(this.props.userId)
            return(
                <div>
                    <NavBar logout={this.props.logout} loggedIn={this.props.loggedIn}/>
                    <MapboxContainer />
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