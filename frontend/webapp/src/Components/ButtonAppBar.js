import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Save';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange } from '@mui/material/colors';

import AddGame from '../pages/AddGame';
import Explore from '../pages/Explore';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FFF, #FFF)',
    border: 0,
    marginBottom: 15,
    color: 'black',
    padding: '5px 30px',
    justifyContent: 'center'
  }
})

export default function ButtonAppBar() {
  const classes = useStyles()
  return (
    <AppBar className={classes.root}
      title={
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <SportsEsportsIcon />
        </IconButton >
      }>

      <Toolbar style={{ justifyContent: 'center' }}>
        <Router>
          <nav>
            <Button
              color="primary"
              style={{ marginRight: 50 }}
              component={Link} to="/explore" color="primary">
              <Typography variant="h6" component='div'>
                Explore
              </Typography>
            </Button>
            <Button
              color="primary"
              style={{ marginRight: 50 }}
              component={Link} to="/add-game" color="primary">
              <Typography variant="h6" component='div'>
                Add Game
              </Typography>
            </Button>
            <Button
              color="primary"
              style={{ marginRight: 50 }}
              component={Link} to="/profile" color="primary">
              <Typography variant="h6" component='div'>
                Profile
              </Typography>
            </Button>
          </nav>
        </Router>
      </Toolbar>
    </AppBar>
  );
}
