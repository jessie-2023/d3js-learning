import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <h1>Hello JSX</h1>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);