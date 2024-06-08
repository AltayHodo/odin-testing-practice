import capitalize from "../capitalize";

test('capitalizes first letter', () => {
  expect(capitalize('altay')).toBe('Altay');
});

test('works with single letter', () => {
  expect(capitalize('a')).toBe('A');
});
