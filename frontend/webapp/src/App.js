import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ButtonAppBar from './Components/ButtonAppBar';

import AddGame from './pages/AddGame';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {

  return (
        <Router>
          <div>
            <ButtonAppBar/>
          </div>
          <div>
            <Container maxWidth="sm" class="App-body">
                <Switch>
                  <Route exactly component={Explore} path="/" />
                  <Route exactly component={Explore} path="/explore" />
                  <Route exactly component={AddGame} path="/add-game" />
                  <Route exactly component={Profile} path="/profile" />
                </Switch>
            </Container>
          </div>
        </Router>
  );
}

export default App;
