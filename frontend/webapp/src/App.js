import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ButtonAppBar from './Components/ButtonAppBar';

import AddGame from './pages/AddGame';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ButtonAppBar/>
            <div>
              <Switch>
                <Route exactly component={Explore} path="/explore" />
                <Route exactly component={AddGame} path="/add-game" />
                <Route exactly component={Profile} path="/profile" />
              </Switch>
            </div>
          </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
