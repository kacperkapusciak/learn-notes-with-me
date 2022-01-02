import React from 'react';
import styled from 'styled-components';
import formatNote from '../utils/formatNote';

interface Props {
  note: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18vw;
  height: 18vw;
  border: 6px solid white;
  outline: 1px solid black;
  border-radius: 4vw;
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 15%,
    rgba(7, 65, 158, 1) 39%,
    rgba(0, 212, 255, 1) 100%
  );
  margin-bottom: 30px;
`;
const DisplayNote = styled.h2<Props>`
  font-weight: bold;
  font-size: 8vw;
  color: white;
  letter-spacing: ${({ note }) => (note.includes('flat') ? '-16px' : 0)};
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
`;

// Displays note in a formatted way eg. C sharp -> C#, D flat -> D♭
function Note({ note }: Props) {
  const formattedNote = formatNote(note);
  return (
    <Wrapper>
      <DisplayNote note={note}>{formattedNote}</DisplayNote>
    </Wrapper>
  );
}

export default Note;
