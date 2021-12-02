import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';





const EventIndexItem = (props) => {
    const {event, deleteEvent, openModalAndEditEvent} = props;
    // console.log(event.date)
    const dateString = moment(event.date).format('MM/DD/YYYY HH:mm:ss');
    // console.log("moment date", dateString)
    
    return (
        <div style={{marginTop: "20px"}}>
             <Card sx={{ maxWidth: 345 }}>
               <button onClick={() => props.updateMap(props.eventIndex)}>
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
      </button>

      {
       ( this.props.currentUser === this.props.event.user._id ? (
          <CardActions> 
            <Button size="small" onClick={() => openModalAndEditEvent(event._id)}>
              Edit Event
            </Button>
            <Button onClick={() => deleteEvent(event._id)} size="small">Delete Event <i className="fa-solid fa-x"></i></Button>
          </CardActions>
        ) : (
          null
        ))
      }
      
    </Card>

        </div>
    )

}





// // export default EventIndexItem;
// const EventIndexItem = (props) => {
//     const {event, deleteEvent} = props;
//     console.log(event)
//     // console.log(event.date)
//     const dateString = moment(event.date).format('MM/DD/YYYY HH:mm:ss');
//     // console.log("moment date", dateString)
    
//     return (
//         <div style={{marginTop: "20px"}}>
//           <Card sx={{ maxWidth: 345 }}>
//             <button onClick={() => props.updateMap(props.eventIndex)}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image="https://www.hyrumcity.org/sites/default/files/imageattachments/community/page/133/event-_image.jpg"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {event.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Category: {event.category}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Date: {dateString}
//                 </Typography>
//             </CardContent>
//             </button>
//             <CardActions>
//               <Button size="small">
//                 <Link to={`/events/${event._id}`}>Edit Event</Link>
//                 </Button>
//               <Button onClick={() => deleteEvent(event._id)} size="small">Delete Event</Button>
//             </CardActions>
//         </Card>

//         </div>
//     )

// }







export default EventIndexItem;



