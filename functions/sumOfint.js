function getSumOfDigits(integer) {
   let sum = 0;
   let digits = String(integer);
   for (let i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
   }
   return sum;
}

module.exports = getSumOfDigits;