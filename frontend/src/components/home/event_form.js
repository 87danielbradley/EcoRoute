import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DatePicker from './date_picker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tags from './tags';

class EventForm extends Component {

    constructor(props){

        super(props);
          console.log("props here", this.props.eventId)
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

        // console.log(this.state.attendees)
        const {title, attendees, date, category} = this.state;
        const {friends} = this.props;
        console.log("HELLO", friends)
    
        return (
            <div>
              <Card sx={{ minWidth: 2 }}>
            <h1 className="eventHeader">Create An Event </h1>
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
                  <Tags friends={friends} attendees={attendees}  onOptionsChange={this.onOptionsChange} formType={this.props.formType}/>
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

                <Button className="addEvent" onClick={this.createEventHandler}  size="s+mall"> {this.props.formType === 'Update Event'? "Update Event" : "Add Event"}</Button>
              </FormControl>
              </CardContent>
              </Card> 
                
            </div>
        )
    }
}

export default EventForm;