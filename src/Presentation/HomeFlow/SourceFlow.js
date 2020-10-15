/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

export default function SourceFlow() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="list"
        disableClearable
        options={top100Games.map((option) => option.title)}
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

const top100Games = [
  { title: 'The Shawshank Redemption', type: 'chat' },
  { title: 'The Godfather', type: 'chat' },
  { title: 'The Godfather: Part II', type: 'chat' },
  { title: 'The Dark Knight', type: 'chat' },
  { title: '12 Angry Men', type: 'chat' },
  { title: "Schindler's List",type: 'chat' },
  { title: 'Pulp Fiction', type: 'chat' },
  { title: 'The Lord of the Rings: The Return of the King', type: 'chat' },
  { title: 'The Good, the Bad and the Ugly', type: 'chat' },
  { title: 'Fight Club', type: 'game' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', type: 'game' },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', type: 'game' },
  { title: 'Forrest Gump', type: 'game' },
  { title: 'Inception', type: 'game' },
  { title: 'The Lord of the Rings: The Two Towers', type: 'game' },
  { title: "One Flew Over the Cuckoo's Nest", type: 'game' },
];
