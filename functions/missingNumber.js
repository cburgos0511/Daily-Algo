const missingNumber = nums => {
  nums = nums.sort((a, b) => a - b);
  let min = 0;
  while (min !== nums.length) {
    if (min !== nums[min]) return min;
    min++;
  }
  return min;
};

// OR

const missingNumber2 = nums => {
  let totalSum = 0;

  for (let i = 1; i < nums.length; i++) {
    totalSum += i;
  }
  totalSum;

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];
  }
  return totalSum * -1;
};
