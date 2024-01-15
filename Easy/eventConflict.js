// Title: Determine if Two Events Have Conflict
// Link:https://leetcode.com/problems/determine-if-two-events-have-conflict/description/
// Description: You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.
// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
// Return true if there is a conflict between two events. Otherwise, return false.
// Example 1:
// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.
// Example 2:
// Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.
// Example 3:
// Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// Output: false
// Explanation: The two events do not intersect.
// Constraints:
// evnet1.length == event2.length == 2.
// event1[i].length == event2[i].length == 5
// startTime1 <= endTime1
// startTime2 <= endTime2
// All the event times follow the HH:MM format.

// Solution:
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  let event1hr = [];
  let event2hr = [];
  let countTrue = 0;
  let countFalse = 0;
  for (i = 0; i < event1.length; i++) {
    const hours = parseInt(event1[i].split(":")[0]);
    event1hr.push(hours);
  }
  for (j = 0; j < event1.length; j++) {
    const hours = parseInt(event2[j].split(":")[0]);
    // console.log(typeof(parseInt(event2[j])))
    event2hr.push(hours);
  }
  for (i = 0; i < event1hr.length; i++) {
    for (j = 0; j < event2hr.length; j++) {
      if (event1hr[i] == event2hr[j]) {
        countTrue++;
      } else {
        countFalse++;
      }
    }
  }
  if (countTrue > 0) {
    return true;
  } else {
    return false;
  }
};
