const functions = require('./functions');

test('Add 2 and 3 equal to 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('Add 2 and 3 not equal to 6', () => {
  expect(functions.add(2, 3)).not.toBe(6);
});