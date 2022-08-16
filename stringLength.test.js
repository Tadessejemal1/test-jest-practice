const stringLength = require('./StringLength.js');

test("string length", () => {
  expect(stringLength("tadesse")).toBe(7);
})

test("string length out of bound", () => {
  expect(() => stringLength("tadesse tadesse"))
    .toThrow('String length is out of range (1 -10)');
  expect(() => stringLength(""))
    .toThrow('String length is out of range (1 -10)');
})
