import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ButtonAppBar from './Components/ButtonAppBar';
import Navigation from './Components/Navigation';
import Calendar from './Components/Calendar';

import AddGame from './pages/AddGame';
import Explore from './pages/Explore';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <Router>
          <Switch>
            <Route path="/explore" component={Explore} exact />
            <Route path="/add-game" component={AddGame} exact />
          </Switch>
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
