// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, tar) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (tar - nums[i] in hash) {
      return [hash[tar - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
