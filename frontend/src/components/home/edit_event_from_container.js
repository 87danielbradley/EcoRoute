import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent, updateAnEvent } from '../../actions/event_actions';
import EventForm from './event_form';


class EditEventFrom extends React.Component{
    componentDidMount(){

        this.props.fetchEvent(this.props.fetchEvent.eventId)
        
    }



    render(){
        const {action, formType, event} = this.props;


        if (!event) return null;
        return (
            <EventForm
                action={action}
                formType={formType}
                event={event} />
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.events,
  formType: 'Update Event'
});


const mapDispatchToProps = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    action: (event) => dispatch(updateAnEvent(event))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditEventFrom)