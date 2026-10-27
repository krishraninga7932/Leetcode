
/*
LeetCode Problem #1480: Running Sum of 1D Array
Topic: Array
Difficulty: Easy

QUESTION:
Given an array nums, return the running sum of nums.

The running sum at each index is the sum of all elements
from index 0 up to that index.

EXAMPLE:
Input:  nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]

EXPLANATION:
Index 0: 1
Index 1: 1 + 2 = 3
Index 2: 1 + 2 + 3 = 6
Index 3: 1 + 2 + 3 + 4 = 10

APPROACH:
1. Start the loop from index 1.
2. Add the previous cumulative sum to the current element.
3. Return the updated array.

IMPORTANT CONCEPTS:
nums[i]     = Current element
nums[i - 1] = Previous element
+=          = Add and assign the result
*/

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
};

// Test the solution in VS Code
const nums = [1, 2, 3, 4];

console.log(runningSum(nums));
// Expected output: [1, 3, 6, 10]
