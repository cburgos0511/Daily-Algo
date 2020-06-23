// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Test([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], return 5);
// Test([1,1,2,-2,5,2,4,4,-1,-2,5], return -1);
// Test([20,1,1,2,2,3,3,5,5,4,20,4,5], return 5);

const findOdd = nums => {
  if (nums.length === 1) return nums[0];
  let dic = {};
  for (let num of nums) {
    dic[num] = dic[num] + 1 || 1;
  }

  for (let num in dic) {
    if (dic[num] % 2 !== 0) return Number(num);
  }
};
