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
    debugger
    const gameUrls=["https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
                    "https://images.unsplash.com/photo-1616574808712-5cf60f175073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1539387893102-c0e198446a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1627855440427-55fc532a441f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    "https://images.unsplash.com/photo-1607376162689-10d6eb9d6c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1511213966740-24d719a0a814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1611329857530-61d261e393e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1573875113509-6708ca2c3609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHxnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYwfHxnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"]

    const foodUrls=["https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
                    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHx3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1569937745011-2d2aeb42da12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"]

    const musicUrls=["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
                    "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1612037317644-ddfabb8e4c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1619067321513-bb55a012e9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1598805538557-c09c3390f5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYW9rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1584140380141-30f09812653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2FyYW9rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1612985837958-e9fe38eab003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRhbmNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1586210477741-f3d7dc250c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGRhbmNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  ]
    const imageUrl = (props.event.category === 'Food'? foodUrls[props.eventIndex] :props.event.category === 'Music'? musicUrls[props.eventIndex]: gameUrls[props.eventIndex])
    return (
        <div style={{marginTop: "20px"}}>
             <Card sx={{ maxWidth: 345 }}>
               <button onClick={() => props.updateMap(props.eventIndex)}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image="https://www.hyrumcity.org/sites/default/files/imageattachments/community/page/133/event-_image.jpg"
        image= {imageUrl}
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
      <div>
        {
        ( props.currentUser === props.event.user ? (
            <CardActions> 
              <Button size="small" onClick={() => openModalAndEditEvent(event._id)}>
                Edit Event
              </Button>
              <Button onClick={() => deleteEvent(event._id)} 
                size="small">Delete Event <i className="fa-solid fa-x"></i>
              </Button>
            </CardActions>
          ) : (
            null
          ))
        }
      </div>
      
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



