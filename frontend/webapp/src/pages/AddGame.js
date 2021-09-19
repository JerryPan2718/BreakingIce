import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";

import PageTitle from '../Components/PageTitle';


const theme = createTheme({
    typography: {
      h5: {
        fontSize: 24,
        margin: 50,
        fontWeight: 'semibold'
      }
    }
  })

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  console.log({
    gameName: data.get('gameName'),
    creatorName: data.get('creatorName'),
    description: data.get('description'),
    rules: data.get('rules'),
    minPlayers: data.get('minPlayers'),
    maxPlayers: data.get('maxPlayers'),
    tags: tagsSelected  // List of Strings
  });
};

/* Dummy list of tags. */
let top100Films = [];
for (let i = 0; i < 100; i++) {
  top100Films.push({
    UUID: `${i}`,
    name: `${i}`,
    description: `${i}`,
    rules: `${i}`,
    creatorName: `${i}`,
    minPlayers: `${i}`,
    maxPlayers: `${i}`,
    likes: `${i}`,
    tags: `${i}`
  });
}

let tagsSelected = [];

function AddGame() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', padding: '5px 10px' }}>
          <PageTitle name='Add Game' />
          <Typography variant='h5'>
              Share your game idea with the community! Enter a short description for your game below, 
              and select relevent tags so that to make sure others get to play your game.
          </Typography>
          <Typography variant='h4' align='center'>
              Share My Game
          </Typography>
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, padding: 10 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Game Name"
                  name="gameName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="creatorName"
                  label="Your Name (Optional)"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  required
                  rows={3}
                  name="description"
                  label="Short Description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  required
                  rows={4}
                  name="rules"
                  label="Rules"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="minPlayers"
                  label="Minimum Number of Players"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  name="maxPlayers"
                  label="Maximum Number of Players"
                  type="number"
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id='tags-outlined'
                  options={top100Films}
                  getOptionLabel={option => option.tags}
                  onChange={(event, value) => tagsSelected.push(value[value.length - 1].UUID)} //TODO: change this line with tag
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Select the tags that best describe your game'
                      placeholder='Favorites'
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register my game
            </Button>
          </Box>

      </Box>
    </ThemeProvider>
  );
}

export default AddGame;
