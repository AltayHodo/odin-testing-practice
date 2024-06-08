import caeserCipher from '../caeserCipher';

test('basic shift', () => {
  expect(caeserCipher('abc', 3)).toBe('def');
  expect(caeserCipher('ghi', 3)).toBe('jkl');
});

test('wrapping from z to a', () => {
  expect(caeserCipher('xyz', 3)).toBe('abc');
});

test('case sensitive', () => {
  expect(caeserCipher('AbC', 3)).toBe('DeF');
  expect(caeserCipher('HeLLo', 3)).toBe('KhOOr')
});

test('non-alphabet characters', () => {
  expect(caeserCipher('abc! def?', 3)).toBe('def! ghi?');
});