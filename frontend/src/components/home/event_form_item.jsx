
import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Tooltip from '@mui/material/Tooltip'
import { Tooltip, Select, FormControl, MenuItem, Box, InputLabel } from '@mui/material'
// export default function EventFormItem() {
//   const [, setPlaces] = React.useState('');

//  

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }







class EventFormItem extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           places: this.props.sortedPlaces,
           currentPlace: ''
       }

   }

   componentDidMount(){
       const firstPlace = this.props.sortedPlaces[0];
        console.log("FIRST PLACE", firstPlace)
       if (firstPlace){
           this.setState({currentPlace: firstPlace.center})
       }

   }

   

    handleChange = (event) => {
        this.props.onLocationSelect(event.target.value)
        this.setState({currentPlace: event.target.value})
        // debugger
  };

    render(){
        
        return(
            <div>
                   <Box>
                       <FormControl fullWidth>
                           <InputLabel id="demo-simple-select-label">Choose the Location</InputLabel>
                           <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={this.state.currentPlace}
                           label="Age"
                           onChange={this.handleChange}>
                               {this.props.sortedPlaces.map((place, idx) => (
                                   <Tooltip title={`Average Attendee Arrival Time: ${this.props.sortedPlaces[idx].time}`} key={this.props.sortedPlaces.time}>
                                        <MenuItem value={place.center}>{place.place_name}</MenuItem>
                                    </Tooltip>
                               ))}
                            </Select>
                        </FormControl>
                    </Box>
               
            </div>
        )
    }
      

}


export default EventFormItem;



