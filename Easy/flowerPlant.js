// Title: Can Place Flowers
// Link: https://leetcode.com/problems/can-place-flowers/description/
/* Description: You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length */
// Solution:
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n == 0) {
    return true;
  }
  let boolArr = [];
  for (let i = 0; i < flowerbed.length; i++) {
    let canPlant = false;
    if (flowerbed[i] === 0) {
      let prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      let nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      canPlant = prevEmpty && nextEmpty;

      if (canPlant) {
        boolArr.push(true);
        n--;
        i++;
      }
    }
    if (!canPlant) {
      boolArr.push(false);
    }
  }
  if (boolArr.includes(true) && n <= 0) {
    return true;
  } else {
    return false;
  }
};
