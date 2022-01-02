import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from '../api/instance';

import CloseIcon from '../icons/close_black_24dp.svg';

import Note from '../components/Note';
import Piano from '../components/Piano';
import Button from '../components/Button';
import FullPageCenter from '../components/FullPageCenter';
import Spinner from '../components/Spinner';
import formatNote from '../utils/formatNote';
import checkNote from '../utils/checkNote';

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
const PointsSection = styled(Spacer)`
  position: relative;
  top: -65px;
  width: 90px;
  justify-content: center;
`;
const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PointsLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
`;
const Points = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: rgba(7, 65, 158, 1);
`;
const Footer = styled(Spacer)`
  margin-top: 30px;
  justify-content: space-between;
  align-items: flex-end;
`;

interface Lesson {
  notes: string[];
  pointsPerNote: number;
}

function Learn() {
  const navigate = useNavigate();
  const [lessonData, setLessonData] = useState<Lesson>();
  const [step, setStep] = useState<number>(0);
  const [pianoTouched, setPianoTouched] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    async function startLesson() {
      const { data } = await axios.post('/lesson/start');
      if (data) {
        setLessonData(data);
      }
    }
    startLesson();
  }, []);

  if (!lessonData) {
    return (
      <FullPageCenter>
        <Spinner />
      </FullPageCenter>
    );
  }

  const { notes, pointsPerNote } = lessonData;

  function progressLesson(correctNote: string, playedNote: string) {
    if (checkNote(correctNote, playedNote) && !pianoTouched) {
      setPoints((points) => points + pointsPerNote);
    }
    setPianoTouched(true);
  }

  return (
    <>
      <Header>
        <Title>Play a note</Title>
        <Close src={CloseIcon} onClick={() => navigate('/')} />
      </Header>
      <Center>
        <Note note={notes[step]} />
        <Piano
          correctNote={notes[step]}
          progressLesson={progressLesson}
          pianoTouched={pianoTouched}
          setPianoTouched={setPianoTouched}
        />
      </Center>
      <Footer>
        <Progress>
          <span>{step + 1}</span>/{notes.length}
        </Progress>
        <Button
          onClick={() => {
            if (step === notes.length - 1) {
              navigate('/');
              return;
            }
            setStep((step) => step + 1);
            setPianoTouched(false);
          }}
          active={pianoTouched}
        >
          next
        </Button>
      </Footer>
      <PointsSection>
        <PointsContainer>
          <PointsLabel>points</PointsLabel>
          <Points>{points}</Points>
        </PointsContainer>
      </PointsSection>
    </>
  );
}

export default Learn;
