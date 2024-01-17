// Title: 1207. Unique Number of Occurrences
// Link: https://leetcode.com/problems/unique-number-of-occurrences/description
// Description: Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
// Input: arr = [1,2]
// Output: false
// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
// Constraints:
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000
// Solution:
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let countobj = {};
  for (i = 0; i < arr.length; i++) {
    if (countobj.hasOwnProperty(arr[i])) {
      countobj[arr[i]] += 1;
    } else {
      countobj[arr[i]] = 1;
    }
  }
  // console.log(countobj)
  let valuesArr = Object.values(countobj);
  const uniqueValuesSet = new Set(valuesArr);
  // console.log(uniqueValuesSet)
  return valuesArr.length === uniqueValuesSet.size;
};
