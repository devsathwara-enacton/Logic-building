//Problem Title: Determine if String Halves Are Alike
//  Link: https://leetcode.com/problems/determine-if-string-halves-are-alike/description
// Description:You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.
// Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
// Constraints:
// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

// Solution:
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let arrsplit = s.split("");
  const midIndex = Math.floor(arrsplit.length / 2);
  const firstPart = arrsplit.splice(midIndex);
  const secondPart = arrsplit;
  let vovelFirst = 0;
  let vovelSecond = 0;
  for (let char of firstPart) {
    if ("aeiou".includes(char.toLowerCase())) {
      vovelFirst++;
    }
  }
  for (let char of secondPart) {
    if ("aeiou".includes(char.toLowerCase())) {
      vovelSecond++;
    }
  }
  if (vovelFirst == vovelSecond) {
    return true;
  } else {
    return false;
  }
};
