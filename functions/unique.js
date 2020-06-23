//ake 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

//each taken only once - coming from s1 or s2.

const longest = (s1, s2) => {
  let str = s1 + s2;
  let hash = {};
  let result = "";
  for (let char of str) {
    hash[char] = hash[hash] + 1 || 1;
  }
  let unique = Object.keys(hash).sort();

  for (let i of unique) {
    result += i;
  }
  return result;
};

console.log(longest("aretheyhere", "yestheyarehere"));
//aehrsty
