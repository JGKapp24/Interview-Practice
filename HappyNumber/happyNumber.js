/*
 * Write an algorithm to determine if a number n is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the  * number by the sum of the squares of its digits, and repeat the process until the number equals 1
 * (where it will  * stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * Return True if n is a happy number, and False if not.
 *
 * Example:
 *
 * Input: 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let counter = 0;
  let curValue = n;
  let curSum = 0;
  while (curValue !== 1 && counter <= 1000) {
    curSum = 0;
    while (curValue !== 0) {
      curSum += (curValue % 10) ** 2;
      curValue = Math.floor(curValue / 10);
    }

    counter += 1;
    curValue = curSum;
  }

  return curValue === 1;
};



// Tests

// console.log(isHappy(19));
// console.log(isHappy(20));
// console.log(isHappy(21));
// console.log(isHappy(22));
// console.log(isHappy(23));
