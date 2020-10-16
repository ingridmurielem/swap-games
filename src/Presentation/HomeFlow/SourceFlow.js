/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

export default function SourceFlow(props) {
  return (
    <div style={{ width: 600, alignSelf: "center", marginLeft: 50, marginTop: 25}}>
      <Autocomplete
        freeSolo
        id="list"
        disableClearable
        onChange={(changeEvent, value) => {props.searchedTextValueDidChange(value)}}
        options={props.dataSource.map((item) => item.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}