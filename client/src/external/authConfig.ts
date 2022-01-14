export const msalConfig = {
  auth: {
    clientId: 'dbb03153-a05f-47ff-b18a-e53f6b9fdcf3',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: '/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};
