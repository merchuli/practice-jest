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

// matcher: toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(false)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();

  expect(functions.checkValue(true)).not.toBeFalsy();
  expect(functions.checkValue(2)).not.toBeFalsy();
});

// matcher: toBeTruthy
test('Should be truthy', () => {
  expect(functions.checkValue(false)).not.toBeTruthy();
  expect(functions.checkValue(0)).not.toBeTruthy();
  expect(functions.checkValue(undefined)).not.toBeTruthy();
  expect(functions.checkValue(null)).not.toBeTruthy();

  expect(functions.checkValue(true)).toBeTruthy();
  expect(functions.checkValue(2)).toBeTruthy();
});