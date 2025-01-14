import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure the path to App component is correct
import './index.css';    // Import your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
