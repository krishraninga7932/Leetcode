
/*
LeetCode #268: Missing Number

Approach: Nested Loops
1. Check every number from 0 to nums.length.
2. Search for that number in the array.
3. If the number is not found, return it.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let found = false;

        for (let j = 0; j < nums.length; j++) {
            if (i === nums[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            return i;
        }
    }
};

// Test Case 1
let nums1 = [3, 0, 1];
console.log("Missing Number:", missingNumber(nums1));
// Expected Output: 2

// Test Case 2
let nums2 = [0, 1];
console.log("Missing Number:", missingNumber(nums2));
// Expected Output: 2

// Test Case 3
let nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("Missing Number:", missingNumber(nums3));
// Expected Output: 8
