import React, { Component } from 'react';

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';

class AppRouteComponent extends Component {

  // handleRedirect(nextState, replace) {
  //   replace(this._authenticated ? '/main' : '/login');
  // }

  render() {
    return (
      <Router history={history}>
        <Route path="/main" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="*" onEnter={this.handleRedirect} /> */}
      </Router>
    );
  }
}


export default AppRouteComponent;
