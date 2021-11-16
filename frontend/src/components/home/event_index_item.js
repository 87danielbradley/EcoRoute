import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';



const EventIndexItem = (props) => {
    const {event} = props;
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div>
    )



}

export default EventIndexItem;




