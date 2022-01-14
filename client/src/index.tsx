import React from 'react';
import ReactDOM from 'react-dom';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import { reactPlugin, history, msalConfig } from './external';

import App from './App';

const instance = new PublicClientApplication(msalConfig);

export const app = (
  <React.StrictMode>
    <MsalProvider instance={instance}>
      <AppInsightsContext.Provider value={reactPlugin}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </AppInsightsContext.Provider>
    </MsalProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
