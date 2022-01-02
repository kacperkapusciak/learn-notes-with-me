import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate('/learn')}>Learn</Button>;
}

export default Home;
