import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={Lugares}
        getOptionLabel={(option) => option.title}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Lugares"           
          />
        )}
      />    
    </div>
  );
}

const Lugares = [
  { title: 'Vinicunca' },
  { title: 'Huacachina' },
  { title: 'Velo de la Novia' },
  { title: 'Machu Picchu' },
  { title: 'Líneas de Nazca' },
  { title: 'Bosque de Piedra de Huayllay' },  
];