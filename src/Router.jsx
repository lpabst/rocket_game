import React, { Component } from 'react';
import { Router, Route, hashHistory as history } from 'react-router';

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';

class AppRouteComponent extends Component {

  render() {
    return (

      <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>

    );
  }
}


export default AppRouteComponent;
