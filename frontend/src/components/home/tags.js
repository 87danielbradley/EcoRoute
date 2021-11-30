/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

export default function Tags({ onOptionsChange, attendees, formType, friends}) {
  const classes = useStyles();
  const [options, setOptions] = useState(["mickey", "tyler", "daniel", "sydney"]); //options=initialalueof the array, setOptions is settting people
  const [selectedOptions, setSelectedOptions] = useState(attendees) 
  
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
              console.log(e)
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
