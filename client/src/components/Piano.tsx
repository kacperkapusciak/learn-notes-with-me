import React, { Fragment } from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';

// @ts-ignore
import whiteKeysSounds from '../sounds/grand_piano_white_only.mp3';
// @ts-ignore
import blackKeysSounds from '../sounds/grand_piano_black_only.mp3';

const Container = styled.div`
  display: flex;
  position: relative;
  left: -25%;
  height: 18vw;
  margin-bottom: 20px;
`;
const WhiteKey = styled.div`
  width: 7vw;
  height: 17vw;
  border: 1px solid #ccc;
  border-radius: 2px 2px 5px 5px;
  background-color: white;
  box-shadow: 0px 9px 0px 0px rgba(0, 0, 0, 0.5);
`;
const BlackKey = styled.div`
  width: 5vw;
  height: 9vw;
  border-radius: 2px 2px 5px 5px;
  background-color: black;
  box-shadow: 0px 9px 0px 0px rgba(0, 0, 0, 0.8);
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

function Piano() {
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

  return (
    <Container>
      <WhiteKeysWrapper>
        {whiteKeys.map((key) => (
          <WhiteKey onClick={() => playWhiteKey({ id: key })} key={key} />
        ))}
      </WhiteKeysWrapper>
      <BlackKeysWrapper>
        {blackKeys.map((key) =>
          key === 'd#' ? (
            <Fragment key={key}>
              <BlackKey onClick={() => playBlackKey({ id: key })} />
              <PhantomBlackKey />
            </Fragment>
          ) : (
            <BlackKey onClick={() => playBlackKey({ id: key })} key={key} />
          )
        )}
      </BlackKeysWrapper>
    </Container>
  );
}

export default Piano;
