
/*
LeetCode Problem: 1. Two Sum
Topic: Array
Difficulty: Easy

QUESTION:
You are given an array of integers nums and an integer target.
Return the indices of the two numbers such that they add up to target.

You may assume that each input has exactly one solution,
and you may not use the same element twice.
You can return the answer in any order.

EXAMPLE:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

EXPLANATION:
nums[0] + nums[1] = 2 + 7 = 9
Therefore, return the indices [0, 1].

APPROACH:
1. Use the first loop to select a number.
2. Use the second loop to select another number.
3. Check whether their sum equals target.
4. If it does, return their indices.
*/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Test the solution in VS Code
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output: [0, 1]
