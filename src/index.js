import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider} from '@mantine/core';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{ fontFamily: 'Open Sans', colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);