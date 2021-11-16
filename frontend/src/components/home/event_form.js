import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DatePicker from './date_picker';
import { receiveEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


class EventForm extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: '',
                category: '',
                attendees: [],
                date: new Date(),
                time: ''
            }    
    }
    
    onTextFieldChange = (fieldName, event) => {
      console.log(event.target.value)
      this.setState({[fieldName]: event.target.value})

    }

    onDateChange = (newDate) => {
      this.setState({date: newDate})
    }


    createEventHandler = () => {
      const {title, category, user, attendees, date, time} = this.state;
      const currentEvent =    {
        title,
        category: 'Music',
        user: 2,
        attendees: [],
        _id: 1,
        date,
        time: '2.00 pm',
      }
      console.log(currentEvent);

      this.props.receiveEvent(currentEvent);

    }

    render() {
      const {title, guest, date} = this.state;
    
        return (
            <div>
              <Card sx={{ minWidth: 2 }}>
            <h1>Create An Event </h1>
            <CardContent>
              <FormControl fullWidth >
                <TextField className="eventTitle"
                  onChange={(e)=> this.onTextFieldChange("title", e)}
                  id="standard-required"
                  label="Event Title"
                  variant="filled"
                  placeholder="Add Title"
                  value={title}
                />
       
              <TextField
                onChange={(e)=> this.onTextFieldChange("guests", e)}
                id="standard-required"
                label="Add guests"
                variant="filled"
                placeholder="Add guests"
                value={guest}
                />

              {/* <LocationOnIcon/> */}
              <div className="formCalendar">
              <DatePicker date={date} onDateChange={this.onDateChange}/>
              </div>
          </FormControl>
          <Button onClick={this.createEventHandler}  size="small">Add Event</Button>

        </CardContent>
        
        </Card> 
                
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
  return {
    receiveEvent: (event) => dispatch(receiveEvent(event))
  }
}

export default connect(null, mapDispatchToProps)(EventForm);