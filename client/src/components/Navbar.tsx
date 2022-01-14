import React from 'react';
import styled from 'styled-components';

import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

const Wrapper = styled.div`
  background-color: rgba(7, 65, 158, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Navbar = (props: any) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Wrapper>
      <Logo>Learn Notes With Me</Logo>
      {isAuthenticated ? <SignOutButton /> : <SignInButton />}
    </Wrapper>
  );
};
