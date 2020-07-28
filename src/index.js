import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'

import history from "./history";
import App from './App';

/* A function that routes the user to the right place after login */
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
