import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
  card_light: '#f5f5f5',
  text: '#333',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
