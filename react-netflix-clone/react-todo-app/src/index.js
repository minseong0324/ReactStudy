import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD:react-todo-app/src/index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
=======

ReactDOM.render(
  <BrowserRouter basename='react-netflix'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
>>>>>>> 0981760 (initial):src/index.js
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
