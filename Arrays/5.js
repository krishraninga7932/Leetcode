/*
LeetCode #217: Contains Duplicate
Topic: Arrays
Difficulty: Easy

Question:
Given an array of numbers, return true if any number
appears at least twice. Otherwise, return false.

Example:
Input:  [1, 2, 3, 1]
Output: true

Approach:
1. Use the outer loop to select a number.
2. Use the inner loop to compare it with later numbers.
3. If two numbers are equal, return true.
4. If no duplicate is found, return false.

Time Complexity: O(n²)
Space Complexity: O(1)
*/

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1]));       // true
console.log(containsDuplicate([5]));          // false