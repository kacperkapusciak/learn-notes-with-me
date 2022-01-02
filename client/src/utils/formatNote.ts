function formatNote(noteToFormat: string): string {
  const [letter, pitch] = noteToFormat.split(' ');
  const uppercasedLetter = letter.toUpperCase();

  if (!pitch) return uppercasedLetter;
  if (pitch === 'sharp') return `${uppercasedLetter}#`
  if (pitch === 'flat') return `${uppercasedLetter}♭`

  return uppercasedLetter;
}

export default formatNote;