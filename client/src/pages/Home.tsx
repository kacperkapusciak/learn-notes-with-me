import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import FullPageCenter from '../components/FullPageCenter';

function Home() {
  const navigate = useNavigate();

  return (
    <FullPageCenter>
      <Button onClick={() => navigate('/learn')}>Start a lesson</Button>
    </FullPageCenter>
  );
}

export default Home;
