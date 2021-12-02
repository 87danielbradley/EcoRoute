import React from "react";
import LocationTags from "./location_tags";






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
               
                    <LocationTags places={this.state.places}/>
                    
         
            </div>
        )
    }
      

}


export default EventFormItem;



