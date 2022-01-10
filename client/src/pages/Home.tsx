import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { api } from '../external';

import Button from '../components/Button';
import FullPageCenter from '../components/FullPageCenter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Spacer = styled.div`
  margin: 16px;
`;

function Home() {
  const navigate = useNavigate();

  const sendRequest = async (url: string) => {
    try {
      await api.post(url);
    } catch (e) {
      // pass
    }
  };

  return (
    <FullPageCenter>
      <Wrapper>
        <Button onClick={() => navigate('/learn')}>Start a lesson</Button>
        <Spacer />
        <Button onClick={() => sendRequest('/test')}>Trigger 404 response</Button>
        <Spacer />
        <Button onClick={() => sendRequest('/lesson/badrequest')}>Trigger 500 response</Button>
      </Wrapper>
    </FullPageCenter>
  );
}

export default Home;
