import React, { Component } from 'react';
import router from './router.jsx';
import './reset.css';

export default class App extends Component {
  render() {
    return (
        <div id='app'>
          {this.props.children}
        </div>
    );
  }
}
