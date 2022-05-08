import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ConnContextProvider} from './context/ConnContext'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 