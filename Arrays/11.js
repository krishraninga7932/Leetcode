
/*
LeetCode #136: Single Number

Approach: Nested Loops
1. Pick each number using the outer loop.
2. Count how many times it appears using the inner loop.
3. If it appears only once, return that number.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        if (count === 1) {
            return nums[i];
        }
    }
};

// Test Case 1
let nums1 = [2, 2, 1];
console.log("Single Number:", singleNumber(nums1));
// Expected Output: 1

// Test Case 2
let nums2 = [4, 1, 2, 1, 2];
console.log("Single Number:", singleNumber(nums2));
// Expected Output: 4

// Test Case 3
let nums3 = [1];
console.log("Single Number:", singleNumber(nums3));
// Expected Output: 1
