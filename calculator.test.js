const Calculator = require('./Calculator.js');

const calculator = new Calculator();


describe('add()', () => {
  test('add 1 and 2 which are two +ve numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  })

  test('add -1 and -2 which are two -ve numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  })

  test('add -1 and -2 which is one -ve and one +ve numbers', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  })
})

describe('subtract()', () => {
  test('substract 1 and 2 which are two +ve numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  })

  test('substract -1 and -2 which are two -ve numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  })

  test('substract -1 and 2 which is one -ve and one +ve numbers', () => {
    expect(calculator.subtract(-1, 2)).toBe(-3);
  })
})

describe('multiply()', () => {
  test('multiply 1 and 2 which are two +ve numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  })

  test('multiply -1 and -2 which are two -ve numbers', () => {
    expect(calculator.multiply(-1, -2)).toBe(2);
  })

  test('multiply -1 and 2 which is one -ve and one +ve numbers', () => {
    expect(calculator.multiply(-1, 2)).toBe(-2);
  })

  test('multiply 0 and one +ve numbers', () => {
    expect(calculator.multiply(0, 2)).toBe(0);
  })
})

describe('divide()', () => {
  test('divided two +ve numbers', () => {
    expect(calculator.divide(8, 4)).toBe(2);
  })

  test('divided two -ve numbers', () => {
    expect(calculator.divide(-8, -4)).toBe(2);
  })

  test('divided one -ve and one +ve numbers', () => {
    expect(calculator.divide(-8, 4)).toBe(-2);
  })

  test("Divide by zero error", () => {
    expect(() => calculator.divide(8, 0))
      .toThrow('Divide by zero exception');
  })
})