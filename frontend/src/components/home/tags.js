/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getFriends} from '../../selectors/event_selectors'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

/**
 * if we are in updateForm means pass form type to this component
 * parseAttendees into username 
 * meaning go thru attendee objects and get array of usernames
 * and use the resulting array of usernames to initialize selectedOptions 
 */

 function Tags({ onOptionsChange, attendees, formType, friends, allFriends}) {  
 /**
  * if formType === update
  *  loop over attendees 
  *   attendees.map(attendee => idToUsernameMap[attendee])
  * 
  */
 debugger
 let attendeeUsername = []
 if (formType === 'Update Event') {
    // debugger
   const mappedUsernames = Object.values(attendees).map(attendee => attendee.username);
   attendeeUsername = mappedUsernames
  //  console.log("MAPPED", mappedUsernames)
 } else {
   attendeeUsername = attendees
    
 }
  const classes = useStyles();
  const [options, setOptions] = useState(friends); //friends are coming in as usernames so we need a way to return it to the backend as an object. See event selectors
  const [selectedOptions, setSelectedOptions] = useState(attendeeUsername) 
  
  const handleOptionsChange = (e) => {
    setOptions(options.concat(e.target.value));
   onOptionsChange(options)
  }
 // Everytime selectOptions change, call  props.OptionsChange
  useEffect(() => { //hook that listens for changes in depencey array . everytime selecteOptions chnage the logic wi
    onOptionsChange(selectedOptions)
  }, [onOptionsChange, selectedOptions])

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        value={selectedOptions}
        onChange={(e, selectedOptions) => {
          setSelectedOptions(selectedOptions)
          onOptionsChange(selectedOptions)
        }}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            // label="Add Attendees"
            placeholder="Attendees"
            onChange={(e) => {
              // console.log(e)
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter" && e.target.value) {
                // console.log("enter!!");
                handleOptionsChange(e)
              }
            }}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state)=>  ({
  allFriends: getFriends(state)

})

export default connect(mapStateToProps, null) (Tags)
