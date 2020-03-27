import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/Card"
import Card from "../src/Cards/Cards";

ReactDOM.render(<Card />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
