import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ThemeProvider } from './components/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <ThemeProvider>
      <App />
    </ThemeProvider>
  
  </React.StrictMode>
);

