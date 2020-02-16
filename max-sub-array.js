// LeetCode Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

const maxSubArray = nums => {
  if (nums.length === 0) return 0;

  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = nums[i];
    } else {
      currSum += nums[i];
    }
    if (currSum > maxSum) maxSum = currSum;
  }
  return maxSum;
};
