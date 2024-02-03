import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    accent: '#FF662D',
    dark: '#0F1D2D',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>
    
  </React.StrictMode>
);
