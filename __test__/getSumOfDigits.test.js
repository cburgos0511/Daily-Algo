const sumOfInt = require("../functions/sumOfint");

test("adds the digits of a string 123 = 6", () => {
  expect(sumOfInt(123)).toBe(6);
  expect(sumOfInt(333)).toBe(9);
  expect(sumOfInt(821)).toBe(11);
});
