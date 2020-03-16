import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Web from './Web';
import * as serviceWorker from './serviceWorker';

let isDownloaded;
if (navigator.standalone) {
  isDownloaded = true;
} else if (matchMedia('(display-mode: standalone)').matches) {
  isDownloaded = true;
} else {
  isDownloaded = false;
}

ReactDOM.render(
  isDownloaded === true ? <App /> : <Web />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
