// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

const solution = str => {
  let arr = [];

  if (str.length % 2 !== 0) str += "_";
  for (let i = 0; i < str.length; i += 2) {
    let s = str[i] + str[i + 1];
    arr.push(s);
  }
  return arr;
};

console.log(solution("abc"));
console.log(solution("abcd"));
