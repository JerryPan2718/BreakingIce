import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Container from "@mui/material/Container";

import ButtonAppBar from "./Components/ButtonAppBar";

import AddGame from "./pages/AddGame";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <ButtonAppBar/>
        <Container maxWidth="sm" class="App-body">
            <Switch>
              <Route exactly component={Explore} path="/explore" />
              <Route exactly component={AddGame} path="/add-game" />
              <Route exactly component={Profile} path="/profile" />
              <Redirect to="/explore" />
            </Switch>
        </Container>
    </Router>
  );
}

export default App;
