export const convertToReadableGameStatus = (char) =>
  String.fromCharCode(char) === 'l' ? 'LOSE' : 'WIN';
