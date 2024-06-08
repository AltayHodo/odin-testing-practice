import calculator from "../calculator";

test('calculator operations', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(6, 3)).toBe(3);
  expect(calculator.multiply(5, 4)).toBe(20);
  expect(calculator.divide(5,2)).toBe(2.5);
});
