/* eslint-disable no-use-before-define */
import React, { useState } from "react";
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

export default function Tags(props) {
  console.log(props)
  const classes = useStyles();
  const [options, setOptions] = useState(["mickey", "tyler", "daniel", "sydney"]);
  const handleOptionsChange = (e) => {
    setOptions(options.concat(e.target.value));
    console.log("calling ")
    props.onOptionsChange(options)
  }
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Add Attendees"
            placeholder="Attendees"
            onChange={() => {}}
            onKeyDown={(e) => {
              if (e.code === "Enter" && e.target.value) {
                console.log("enter!!");
                handleOptionsChange(e)
              }
            }}
          />
        )}
      />
    </div>
  );
}
