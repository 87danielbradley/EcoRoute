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
import {  getPlaces, getMatrix } from '../../util/matrix_api_util'
import { getFriendsByUsername } from '../../selectors/event_selectors'
class EventForm extends Component {

    constructor(props){

        super(props);
          console.log("props here", this.props.eventId)
            this.state = { 
              ...this.props.event, 
              location: '' 
            }  
    }
    
    onTextFieldChange = (fieldName, event) => {
      console.log(event.target.value)
      this.setState({[fieldName]: event.target.value}, () => {
        if (fieldName === 'location') {
          this.handleSearch()
        }
      })

    }

    onDateChange = (newDate) => {
      this.setState({date: newDate})
    }




    createEventHandler = (e) => {
      e.preventDefault()

      const {title, category,date, attendees} = this.state;

      const event = {
        title, 
        category,
        date, 
        attendees
      }

      debugger

      this.props.action(event);

    }

    onOptionsChange = (options) => {

      this.setState({attendees: options}, () => {
        
      //  this.handleSearch()
        
      
      })
     
    }

    handleSearch = () => {
      const state = this.props.allState; // from container 
      const attendeeUsernames = this.state.attendees;
      const attendeeObjects = getFriendsByUsername(state, attendeeUsernames);
  

      const nearbyString = [ -73.9855, 40.7580]; //nearby is current location
      const query = this.state.location;   //from what i input


      getPlaces(query, nearbyString).then(({data}) => {
          console.log("data", data)
          const features = data.features;
          const places = features.map(place => place.geometry.coordinates)
          console.log("attendee objects", attendeeObjects)
          getMatrix(attendeeObjects, places).then(response => {
            console.log(response)
          })

          return places
      })
    }
    
    render() {

        // console.log(this.state.attendees)
        const {title, attendees, date, category, location} = this.state;
        const {friends} = this.props;
        // console.log("HELLO", friends)
    
        return (
            <div>
              <Card>
            <h1 className="eventHeader">Create An Event </h1>
            <CardContent>
              <FormControl >
                <TextField className="eventTitle"
                  onChange={(e)=> this.onTextFieldChange("title", e)}
                  id="standard-required"
                  label="Event Title"
                  placeholder="Add Title"
                  value={title}
                />
                <div>
                  <Tags friends={friends} attendees={attendees}  onOptionsChange={this.onOptionsChange} formType={this.props.formType}/>
                  </div>
                
                  <br/>
                 <TextField className="eventTitle"
                  onChange={(e)=> this.onTextFieldChange("location", e)}
                  id="standard-required"
                  label="Location"
                  placeholder="Search Location"
                  value={location}
                />
                  
                  <div className="formCalendar">
                     <DatePicker date={date} onDateChange={this.onDateChange}/>
                  </div>
                </FormControl>

                <FormControl className="selectCategory">
                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={category}
                  placeholder="Category"
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