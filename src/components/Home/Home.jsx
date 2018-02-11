import React, { Component } from 'react';
import './Home.css';

export default class TodoAppComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
    }
  }

  render() {
    return (
      <div className='home'>
        home route
      </div>
    );
  }
  
}

