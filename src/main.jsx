import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-hemantrawat.us.auth0.com"
    clientId="MMeXFmR5kTyNbRmIhoS3WBu05Zuy7RiG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >  <App />
  </Auth0Provider>,
);