const calc = require('./index.js');

describe('getSum', () => {
  test('should return 0 when no argumnets', () => {
    expect(calc.getSum()).toBe(0);
  });

  test('should return 107 when no argumnets', () => {
    expect(calc.getSum(1, -100, 200, 6)).toBe(107);
  });

  test('should return 8 with str', () => {
    expect(calc.getSum('fdsfds', 10, -8, 6)).toBe(8);
  });

  test('should return 10 with str', () => {
    expect(calc.getSum('fdsfds', 10, -8, 6, '2')).toBe(10);
  });
});
