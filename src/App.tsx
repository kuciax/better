import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/users">
            users
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
