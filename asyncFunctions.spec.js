const asyncFunctions = require('./asyncFunctions');

/**
 * #Testing Asynchronous
 * https://jestjs.io/docs/asynchronous
 * */

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return asyncFunctions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
});
