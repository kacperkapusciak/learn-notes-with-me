import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../api/instance';

import Button from '../components/Button';
import FullPageCenter from '../components/FullPageCenter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Spacer = styled.div`
  margin: 30px;
`;

function Home() {
  const navigate = useNavigate();

  const sendInvalidRequest = async () => {
    try {
      await axios.get('/test');
    } catch (e) {
      // pass
    }
  };

  return (
    <FullPageCenter>
      <Wrapper>
        <Button onClick={() => navigate('/learn')}>Start a lesson</Button>
        <Spacer />
        <Button onClick={sendInvalidRequest}>Send invalid request</Button>
      </Wrapper>
    </FullPageCenter>
  );
}

export default Home;
