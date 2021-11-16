import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DatePicker from './date_picker';
// import { createAnEvent, updateAnEvent } from '../../actions/event_actions';
// import { connect } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tags from './tags';



class EventForm extends Component {

    constructor(props){
        super(props);
            this.state = this.props.event;  
    }
    
    onTextFieldChange = (fieldName, event) => {
      console.log(event.target.value)
      this.setState({[fieldName]: event.target.value})

    }

    onDateChange = (newDate) => {
      this.setState({date: newDate})
    }


    createEventHandler = (e) => {
      e.preventDefault()
   
      this.props.action(this.state);

    }

    onOptionsChange = (options) => {
      
      this.setState({attendees: options})
     
    }
    
    render() {
      // debugger
        console.log(this.state.attendees)
        const {title, attendees, date, category} = this.state;
    
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
                <div>
                  <Tags attendees={attendees}  onOptionsChange={this.onOptionsChange}/>
                  </div>
                  
                  <div className="formCalendar">
                     <DatePicker date={date} onDateChange={this.onDateChange}/>
                  </div>
                </FormControl>

                <FormControl className="selectCategory" variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={category}
                  onChange={(e) => this.onTextFieldChange("category", e)}
                  >
                  <MenuItem value={'Music'}>Music</MenuItem>
                  <MenuItem value={'Food'}>Food</MenuItem>
                  <MenuItem value={'Games'}>Games</MenuItem>
                </Select>

                <Button className="addEvent" onClick={this.createEventHandler}  size="s+mall">Add Event</Button>
              </FormControl>
              </CardContent>
              </Card> 
                
            </div>
        )
    }
}

// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => {
//   return {
//     createEvent: (event) => dispatch(createAnEvent(event)), 
//     updateEvent: (event) => dispatch(updateAnEvent(event))
    
//   }
// }

export default EventForm;