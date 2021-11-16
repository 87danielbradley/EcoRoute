import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DatePicker from './date_picker';
import { receiveEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tags from './tags';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


class EventForm extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: '',
                category: '',
                attendees: [],
                date: new Date(),
                // time: ''
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
      const {title, category, user, attendees, date} = this.state;
      const currentEvent =    {
        title,
        category: 'Music',
        user: 2,
        attendees, //this.state.attendees,
        _id: 1,
        date,
        // time: '2.00 pm',
      }
      console.log(currentEvent);

      this.props.receiveEvent(currentEvent);

    }

    onOptionsChange = (options) => {
      this.setState({attendees: options})
      console.log(this.state.attendees)
    }

    render() {
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
                  <MenuItem value={10}>Music</MenuItem>
                  <MenuItem value={20}>Food</MenuItem>
                  <MenuItem value={30}>Games</MenuItem>
                </Select>

                <Button className="addEvent" onClick={this.createEventHandler}  size="s+mall">Add Event</Button>
          </FormControl>


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