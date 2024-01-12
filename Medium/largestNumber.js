// Title:Largest Number
// Link:https://leetcode.com/problems/largest-number/
// Description:Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"
// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

// Solution:
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const numString = nums.map((num) => num.toString());
  numString.sort((a, b) => {
    let option1 = a + b;
    let option2 = b + a;
    return option2.localeCompare(option1);
  });
  const result = numString.join("");
  return result;
};
