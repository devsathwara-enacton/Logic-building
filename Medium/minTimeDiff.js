// Title:Minimum Time Difference
// Link: https://leetcode.com/problems/minimum-time-difference/description/
// Description: Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
// Example 1:
// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:
// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0
// Constraints:
// 2 <= timePoints.length <= 2 * 104
// timePoints[i] is in the format "HH:MM".
// Solution:
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const minutesArray = timePoints.map((time) => {
    const [hour, minute] = time.split(":");
    return parseInt(hour) * 60 + parseInt(minute);
  });

  minutesArray.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 1; i < minutesArray.length; i++) {
    const diff = minutesArray[i] - minutesArray[i - 1];
    minDiff = Math.min(minDiff, diff);
  }

  const circularDifference =
    24 * 60 + minutesArray[0] - minutesArray[minutesArray.length - 1];
  minDifference = Math.min(minDifference, circularDifference);

  return minDifference;
};
