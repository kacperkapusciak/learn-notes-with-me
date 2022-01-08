// AppInsights.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const instrumentationKey = process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY;

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history },
    },
  },
});
appInsights.loadAppInsights();
export { reactPlugin, appInsights };
