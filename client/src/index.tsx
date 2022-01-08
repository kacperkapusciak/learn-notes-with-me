import React from 'react';
import ReactDOM from 'react-dom';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin, history } from './external/appInsights';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import App from './App';

export const app = (
  <React.StrictMode>
    <AppInsightsContext.Provider value={reactPlugin}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </AppInsightsContext.Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
