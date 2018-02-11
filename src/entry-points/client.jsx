import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app.jsx';
import Router from 'src/Router.jsx';

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById('app')
);
