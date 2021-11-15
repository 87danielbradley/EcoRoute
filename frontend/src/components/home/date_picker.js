import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';


export default function DatePicker(props) {
    const { onDateChange } = props;

  const handleOnChange = (newDate) => {

    onDateChange(newDate);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="calendar">
           <DateTimePicker
          label="Date&Time picker"
          value={props.date}
          onChange={handleOnChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}