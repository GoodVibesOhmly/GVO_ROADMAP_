import React from 'react';
import ReactDOM from 'react-dom';
import { Landing } from './pages/';
import reportWebVitals from './reportWebVitals';
import './styles/reset.css';
import './styles/root.css';
import './styles/fonts.css';
import './styles/buttons.css';
import './styles/typography.css';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();