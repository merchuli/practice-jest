const functions = require('./functions');

// matcher: toBe (for primitive types)
test('Add 2 and 3 should be equal to 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

// matcher: not
test('Add 2 and 3 should not be equal to 6', () => {
  expect(functions.add(2, 3)).not.toBe(6);
});

// matcher: toEqual (for object types: Object, Array...)
test('User should be object', () => {
  expect(functions.createUser()).toEqual({firstName: 'Merchu', lastName: 'Liang'});
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


/** Numbers */
// matcher: toBeLessThan, toBeLessThanOrEqual
test('Should be under 1600', () => {
  const expected = 1600;
  const price1 = 700;
  const price2 = 800;

  expect(price1 + price2).toBeLessThan(expected);
  expect(price2*2).toBeLessThanOrEqual(expected);
});

/** Regular Expression(regex) */
test('There is no I in team (sensitive)', () => {
  expect('team').not.toMatch(/I/);
});

test('There is I in ice (insensitive)', () => {
  expect('ice').toMatch(/I/i);
});