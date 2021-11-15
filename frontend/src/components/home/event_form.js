import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DatePicker from './date_picker';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


export default class EventForm extends Component {

    constructor(props){
        super(props);
            this.state = {
                title: '',
                date: new Date(),
                currentGuestName: '',
                guests: []
            }    
    }
    
    onTextFieldChange = (fieldName, event) => {
      console.log(event.target.value)
      this.setState({[fieldName]: event.target.value})

    }

    onDateChange = (newDate) => {
      this.setState({date: newDate})
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
                
              <DatePicker date={date} onDateChange={this.onDateChange}/>
          </FormControl>
          <Button size="small">Add Event</Button>

        </CardContent>
        
        </Card> 
                
            </div>
        )
    }
}
