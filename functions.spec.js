const functions = require('./functions');

// matcher: toBe
test('Add 2 and 3 equal to 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

// matcher: not
test('Add 2 and 3 not equal to 6', () => {
  expect(functions.add(2, 3)).not.toBe(6);
});

// matcher: toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// matcher: toBeUndefined
test('Should be undefined', () => {
  expect(functions.isUndefined()).toBeUndefined();
});
