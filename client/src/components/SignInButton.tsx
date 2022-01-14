import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../external/authConfig';

import Button from './Button';

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (e) {
      console.log(e);
    }
  };
  return <Button onClick={handleLogin}>Sign in</Button>;
};
