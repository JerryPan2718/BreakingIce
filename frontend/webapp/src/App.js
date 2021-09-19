import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Container from "@mui/material/Container";
import ButtonAppBar from "./Components/ButtonAppBar";
import FooterBar from "./Components/FooterBar";

import AddGame from "./pages/AddGame";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import ViewGame from "./pages/ViewGame";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Container maxWidth='sm' class='App-body'>
        <Switch>
          <Route exactly component={Explore} path='/explore' />
          <Route exactly component={AddGame} path='/add-game' />
          <Route exactly component={Profile} path='/profile' />
          <Route component={ViewGame} path='/view/:uuid' />
          <Redirect to='/explore' />
        </Switch>
      </Container>
      <FooterBar />
    </Router>
  );
}

export default App;
