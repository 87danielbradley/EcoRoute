import React, { Component } from 'react';
// import { connect } from 'react-redux';
import EventForm from './event_form';
// import { createEvent } from '../../actions/event_actions';
import EventIndex from './event_index';



export default class EventContainer extends Component {
    render() {
        return (
            <div className="columns">
            <div className="column"></div>

            <div className="column is-two-thirds">
                <EventForm/>
                <EventIndex/>
                
            </div>
            <div className="column">  </div>

          
            </div>
       
        )
    }
}


// const mapStateToProps = state => ({
//     formType: "Create Activity",
//     userId: state.session
// })


// const mapDispatchToProps = dispatch => ({
//     action: (event) => {
//         return dispatch(createEvent(event))
//     }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(EventForm);