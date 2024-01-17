/*
Title:Median of Two Sorted Arrays
Link:https://leetcode.com/problems/median-of-two-sorted-arrays/
Description:Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/
// Solution:
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let nums2Copy = nums2.slice(0, n);

  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (nums1Copy[i] <= nums2Copy[j]) {
      nums1[k++] = nums1Copy[i++];
    } else {
      nums1[k++] = nums2Copy[j++];
    }
  }

  while (i < m) {
    nums1[k++] = nums1Copy[i++];
  }

  while (j < n) {
    nums1[k++] = nums2Copy[j++];
  }
};
