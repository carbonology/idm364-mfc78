import React from 'react';
import App from './components/App'
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import styles from './styles.css';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>,
    document.getElementById("target")
)