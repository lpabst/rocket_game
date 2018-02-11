import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app.jsx';
import Router from '../router.jsx';

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById('app')
);
