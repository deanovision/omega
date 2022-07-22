import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizedUserProvider } from './contexts/AuthorizedUserContext';
import { PageLinksProvider } from './contexts/PageLinksContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthorizedUserProvider>
        <PageLinksProvider>
          <App />
        </PageLinksProvider>
      </AuthorizedUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);