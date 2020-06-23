//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
const narcissistic = n => {
  let pow = [...n.toString()];
  let sum = 0;
  let len = pow.length;
  for (let i = 0; i < len; i++) {
    sum += pow[i] ** len;
  }
  return sum === n;
};
