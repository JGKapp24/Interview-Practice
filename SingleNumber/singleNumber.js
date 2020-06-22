/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const uniqueNums = {};

  // Find all unique nums
  nums.forEach((num) => {
    if (uniqueNums[num]) {
      delete uniqueNums[num];
    } else {
      uniqueNums[num] = true;
    }
  });

  // return unique num
  const results = Object.keys(uniqueNums);
  if (results.length === 0) {
    return null;
  } else {
    return results[0];
  }
};

// Tests
/*
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
*/
