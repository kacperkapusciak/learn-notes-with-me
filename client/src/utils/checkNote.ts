import formatNote from './formatNote';

function checkNote(correctNote: string, playedNote: string) {
  const formattedNote = formatNote(correctNote).toLowerCase();
  return formattedNote === playedNote;
}

export default checkNote;
