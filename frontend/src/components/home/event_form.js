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
// import {  getPlaces, getMatrix } from '../../util/matrix_api_util'
import { getFriendsByUsername } from '../../selectors/event_selectors'
import EventFormItem from './event_form_item';
import {FORM_TYPE_CREATE_EVENT, FORM_TYPE_UPDATE_EVENT } from '../../constants/events_constants'

class EventForm extends Component {

    constructor(props){

        super(props);
          // console.log("props here", this.props.eventId)
            this.state = { 
              ...this.props.event, 
              location: '',
              locationSearch: '',
              search: []
            }  
          this.handleLocationSelect = this.handleLocationSelect.bind(this)
    }
    
    onTextFieldChange = (fieldName, event) => {
      // console.log(event.target.value)
      this.setState({[fieldName]: event.target.value}, () => {
        if (fieldName === 'locationSearch' && event.target.value.length > 5) {
          this.handleSearch()
        }
      })

    }

    onDateChange = (newDate) => {
      this.setState({date: newDate})
    }




    createEventHandler = (e) => {
      e.preventDefault()

      const {title, category,date, attendees, _id, location} = this.state;

      const event = {
        title, 
        category,
        date, 
        attendees,
        location
      }
      if (this.props.formType === 'Update Event'){
        event._id = _id
      }

      

      this.props.action(event,this.props.currentUser);
      this.props.closeModalEvent();
    }

    onOptionsChange = (options) => {

      this.setState({attendees: options}, () => {
        
      //  this.handleSearch()
        
      
      })
     
    }

    handleSearch = () => {
      const state = this.props.allState; // from container 
      const attendeeUsernames = this.state.attendees;
  
      const attendeeObjects = getFriendsByUsername(state, attendeeUsernames)

      attendeeObjects.unshift(this.props.currentUser)
      debugger
      let lng = attendeeObjects.reduce((total, next) => total + next.location[0],0)/attendeeObjects.length;
      let lat = attendeeObjects.reduce((total, next) => total + next.location[1],0)/attendeeObjects.length;
      
      
      

      const nearbyString = [ lng, lat]; //nearby is average* location
      const query = this.state.locationSearch;   //from what i input




      this.props.findPlacesNearby(query, nearbyString)
      .then(() => {
        this.props.fetchMatrix( attendeeObjects, this.props.placesLocation)
        .then(() => {this.setState({search: this.props.sortedPlaces})})

      })
      //attendeesArray, placesArray
      
      
    //   getPlaces(query, nearbyString).then(({data}) => {
    //       console.log("data", data)
    //       const features = data.features;
    //       const places = features.map(place => place.geometry.coordinates)
    //       console.log("attendee objects", attendeeObjects)
    //       getMatrix(attendeeObjects, places).then(response => {
    //         console.log(response)
    //       })

    //       return places
    //   })
    }

    handleLocationSelect = (coordinates) => {
      // console.log("value", coordinates)
      this.setState({location: coordinates}) //attempt to set state
    }
    
    render() {
     
        // console.log(this.state.attendees)
        const {title, attendees, date, category, locationSearch} = this.state;
        const {friends, sortedPlaces} = this.props;
        console.log("THE FORM TYPE IS", this.props.formType)
      
        return (
            <div>
              <Card>
              
            <h1 className="eventHeader">Event Form</h1>
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
                  onChange={(e)=> this.onTextFieldChange("locationSearch", e)}
                  id="standard-required"
                  label="Location"
                  placeholder="Search Location"
                  value={locationSearch}
                />
                {/* {sortedPlaces.map(place =>{
                  return <EventFormItem place={place} sortedPlaces={this.state.search} />
                })} */}

                {
                  sortedPlaces && sortedPlaces.length > 0 && (<EventFormItem sortedPlaces={this.state.search} onLocationSelect={(coordinates)=>this.handleLocationSelect(coordinates)}/> )
                }

                
                  
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