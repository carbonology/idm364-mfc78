import React from 'react';
import App from './components/App'
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>,
    document.getElementById("target")
)