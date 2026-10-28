/*
LeetCode #283: Move Zeroes
Topic: Arrays
Difficulty: Easy

Question:
Move all zeros to the end of the array while keeping
the order of non-zero elements unchanged.

Example:
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Approach:
1. Store all non-zero numbers in a new array.
2. Add zeros until both arrays have equal lengths.
3. Copy the values back into the original nums array.

Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    let arr = [];

    // Step 1: Store non-zero numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arr.push(nums[i]);
        }
    }

    // Step 2: Add zeros at the end
    while (arr.length < nums.length) {
        arr.push(0);
    }

    // Step 3: Update the original array
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
};

// Test cases
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // [0]

let nums3 = [1, 2, 3];
moveZeroes(nums3);
console.log(nums3); // [1, 2, 3]