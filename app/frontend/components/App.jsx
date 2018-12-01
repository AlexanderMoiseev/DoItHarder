import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

import { Header, Body, Footer } from './Main.jsx';
import HomePage from './HomePage';
import EditRegistrationPage from './EditRegistrationPage';
import AboutPage from './AboutPage';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <ul id="headerButtons">
              <li className="navButton"><Link to="">Home</Link></li>
              <li className="navButton"><Link to="/users/edit">Edit Registration</Link></li>
              <li className="navButton"><Link to="/home/about">About</Link></li>
            </ul>
          </header>

          {/* <Route name="editregistration"  path="/users/edit" component={EditRegistrationPage} /> */}
          <div className="content">
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="home" path="/users/edit" component={EditRegistrationPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
