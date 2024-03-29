// Title: Maximum Product of Word Lengths
// Link: https://leetcode.com/problems/maximum-product-of-word-lengths/description/
// Description: Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
// Example 1:
// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:
// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:
// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.
// Constraints:
// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let maxProduct = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!hasCommonLetters(words[i], words[j])) {
        maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
      }
    }
  }

  return maxProduct;
};
function hasCommonLetters(word1, word2) {
  const set1 = new Set(word1);
  const set2 = new Set(word2);

  for (const char of set1) {
    if (set2.has(char)) {
      return true;
    }
  }

  return false;
}
