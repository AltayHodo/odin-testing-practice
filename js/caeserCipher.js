export default function caeserCipher(string, shift) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperAlphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let final = '';

  string.split('').forEach((char) => {
    let index = lowerAlphabet.indexOf(char);
    let currentAlphabet = lowerAlphabet;
    if (index === -1) {
      index = upperAlphabet.indexOf(char);
      if(index === -1){
        final += char;
        return;
      }
      currentAlphabet = upperAlphabet
    }
    if (index + shift > currentAlphabet.length - 1) {
      index = index + shift - currentAlphabet.length;
      final += currentAlphabet[index];
    } else {
      final += currentAlphabet[index + shift];
    }
  });
  return final;
}
