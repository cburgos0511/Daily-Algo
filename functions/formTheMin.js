///Task
//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(vals) {
  let hash = {};
  for (let val of vals) {
    hash[val] = true;
  }

  let arr = Object.keys(hash).sort((a, b) => a - b);

  return parseInt(arr.join(""));
}
