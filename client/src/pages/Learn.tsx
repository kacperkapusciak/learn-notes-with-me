import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Note from '../components/Note';
import Piano from '../components/Piano';

import CloseIcon from '../icons/close_black_24dp.svg';
import Button from '../components/Button';

const Spacer = styled.div`
  display: flex;
  max-width: 920px;
  margin: 16px auto 20px auto;
`;
const Header = styled(Spacer)`
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 32px;
`;
const Close = styled.img`
  width: 40px;
  height: 40px;
  margin: 16px;
  cursor: pointer;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Progress = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #aaa;
  span {
    font-size: 32px;
    color: #555;
  }
`;
const Footer = styled(Spacer)`
  margin-top: 30px;
  justify-content: space-between;
  align-items: flex-end;
`;

function Learn() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Title>Play a note</Title>
        <Close src={CloseIcon} onClick={() => navigate('/')} />
      </Header>
      <Center>
        <Note note="c flat" />
        <Piano />
      </Center>
      <Footer>
        <Progress>
          <span>4</span>/5
        </Progress>
        <Button onClick={() => {}}>next</Button>
      </Footer>
    </>
  );
}

export default Learn;
