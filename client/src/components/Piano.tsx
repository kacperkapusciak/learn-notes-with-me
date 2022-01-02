import React, { Dispatch, Fragment, useState } from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';

// @ts-ignore
import whiteKeysSounds from '../sounds/grand_piano_white_only.mp3';
// @ts-ignore
import blackKeysSounds from '../sounds/grand_piano_black_only.mp3';
import { PlayFunction } from 'use-sound/dist/types';
import checkNote from '../utils/checkNote';

interface KeyProps {
  correct: boolean;
  pianoTouched: boolean;
  canChangeColor: boolean;
}

const Container = styled.div`
  display: flex;
  position: relative;
  left: -25%;
  height: 18vw;
  margin-bottom: 20px;
`;
const WhiteKey = styled.div<KeyProps>`
  width: 7vw;
  height: 17vw;
  border: 1px solid #ccc;
  border-radius: 2px 2px 5px 5px;
  background-color: ${({ correct, pianoTouched, canChangeColor }) =>
    !pianoTouched || !canChangeColor
      ? 'white'
      : correct
      ? 'rgba(8, 212, 105, 1)'
      : 'rgba(255, 12, 90, 1)'};
  box-shadow: 0px 9px 0px 0px #bbb;
`;
const BlackKey = styled.div<KeyProps>`
  width: 5vw;
  height: 9vw;
  border-radius: 2px 2px 5px 5px;
  background-color: ${({ correct, pianoTouched, canChangeColor }) =>
    !pianoTouched || !canChangeColor
      ? 'black'
      : correct
      ? 'rgba(8, 212, 105, 1)'
      : 'rgba(255, 12, 90, 1)'};
  box-shadow: 0px 9px 0px 0px #333;
  margin-right: 2vw;
`;
const PhantomBlackKey = styled.div`
  width: 5vw;
  height: 9vw;
  opacity: 0;
  margin-right: 2vw;
`;
const WhiteKeysWrapper = styled.div`
  display: flex;
  position: absolute;
`;
const BlackKeysWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 4.5vw;
`;

interface Props {
  correctNote: string;
  progressLesson: (a: string, b: string) => void;
  pianoTouched: boolean;
  setPianoTouched: Dispatch<boolean>;
}

function Piano({ correctNote, progressLesson, pianoTouched, setPianoTouched }: Props) {
  const [keyToLightUp, setKeyToLightUp] = useState<string>();
  const [isKeyLighted, setKeyLighted] = useState<boolean>(false);

  const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
  const blackKeys = ['c#', 'd#', 'f#', 'g#', 'a#'];
  const [playWhiteKey] = useSound(whiteKeysSounds, {
    sprite: {
      c: [0, 800],
      d: [1000, 800],
      e: [2000, 800],
      f: [3000, 800],
      g: [4000, 800],
      a: [5000, 800],
      b: [6000, 800],
    },
  });
  const [playBlackKey] = useSound(blackKeysSounds, {
    sprite: {
      'c#': [0, 800],
      'd#': [1000, 800],
      'f#': [2000, 800],
      'g#': [3000, 800],
      'a#': [4000, 800],
    },
  });

  function playNote(key: string, play: PlayFunction) {
    if (!pianoTouched) {
      setKeyToLightUp(key);
    }
    play({ id: key });
    setPianoTouched(true);
    progressLesson(correctNote, key);
  }

  return (
    <Container>
      <WhiteKeysWrapper>
        {whiteKeys.map((key) => (
          <WhiteKey
            onClick={() => playNote(key, playWhiteKey)}
            key={key}
            pianoTouched={pianoTouched}
            canChangeColor={keyToLightUp === key}
            correct={checkNote(correctNote, key)}
          />
        ))}
      </WhiteKeysWrapper>
      <BlackKeysWrapper>
        {blackKeys.map((key) =>
          key === 'd#' ? (
            <Fragment key={key}>
              <BlackKey
                onClick={() => playNote(key, playBlackKey)}
                pianoTouched={pianoTouched}
                canChangeColor={keyToLightUp === key}
                correct={checkNote(correctNote, key)}
              />
              <PhantomBlackKey />
            </Fragment>
          ) : (
            <BlackKey
              onClick={() => playNote(key, playBlackKey)}
              key={key}
              pianoTouched={pianoTouched}
              canChangeColor={keyToLightUp === key}
              correct={checkNote(correctNote, key)}
            />
          ),
        )}
      </BlackKeysWrapper>
    </Container>
  );
}

export default Piano;
