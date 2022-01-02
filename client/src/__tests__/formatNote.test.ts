import formatNote from '../utils/formatNote';

describe('[formatNote]', () => {
  it("should format 'c sharp' to 'C#'", () => {
    expect(formatNote('c sharp')).toBe('C#');
  })
  it("should format 'f flat' to 'F♭'", () => {
    expect(formatNote('f flat')).toBe('F♭');
  })
  it("should format 'b' to 'B'", () => {
    expect(formatNote('b')).toBe('B');
  })
  it('should ignore casing', () => {
    expect(formatNote('B')).toBe('B');
  })
})