import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';





class EventFormItem extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           places: this.props.sortedPlaces
       }

   }

    render(){
        return(
            <div>
                <button>
                    click here
                </button>
            </div>
        )
    }
      

}


export default EventFormItem;



