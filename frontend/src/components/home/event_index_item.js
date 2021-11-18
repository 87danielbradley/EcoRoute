import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CreateEventModal from './create_event_modal';
import { updateAnEvent } from "../../actions/event_actions";



const EventIndexItem = (props) => {
    const {event, deleteEvent, updateAnEvent} = props;
    console.log(event)
    // console.log(event.date)
    const dateString = moment(event.date).format('MM/DD/YYYY HH:mm:ss');
    // console.log("moment date", dateString)
    return (
        <div style={{marginTop: "20px"}}>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.hyrumcity.org/sites/default/files/imageattachments/community/page/133/event-_image.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Category: {event.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {dateString}
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small">
          <Link to={`/events/${event._id}`}>Edit Event</Link>
          </Button>
        <Button onClick={() => deleteEvent(event._id)} size="small">Delete Event <i class="fa-solid fa-x"></i></Button>
      </CardActions>
    </Card>

        </div>
    )

}


//onClick = {() => updateAnEvent(event._id) }




export default EventIndexItem;




