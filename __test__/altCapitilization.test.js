const altCap = require("../functions/altCap");

test("should capitilize even index", () => {
  expect(altCap("abcd")).toEqual(["AbCd", "aBcD"]);
  expect(altCap("qwert")).toEqual(["QwErT", "qWeRt"]);
});
