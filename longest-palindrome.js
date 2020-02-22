// Longest Palindromic Substring (Linear)
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.

// For this Kata, you are given a string s. Write a function that returns the longest contiguous palindromic substring in s (it could be the entire string). In the event that there are multiple longest palindromic substrings, return the first to occur.

// I'm not trying to trick you here:

// You can assume that all inputs are valid strings.
// Only the letters a-z will be used, all lowercase (your solution should, in theory, extend to more than just the letters a-z though).
// NOTE: Quadratic asymptotic complexity (O(N^2)) or above will NOT work here.

const longestPal = str => {
  let low,
    high,
    start,
    max = 1;

  for (let i = 1; i < str.length; i++) {
    low = i - 1;
    high = i;

    while (low >= 0 && high <= str.length && str[low] === str[high]) {
      low;
      high;
      start;
      max;
      if (high - low + 1 > max) {
        max = high - low + 1;
        start = low;
      }
      high++;
      low--;
    }

    low = i - 1;
    high = i + 1;
    while (low >= 0 && high <= str.length && str[low] === str[high]) {
      if (high - low + 1 > max) {
        max = high - low + 1;
        start = low;
      }
      high++;
      low--;
    }
  }
  return str.substr(start, max);
};
