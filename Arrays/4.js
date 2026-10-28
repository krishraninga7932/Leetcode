
/*
LeetCode Problem #1295: Find Numbers with Even Number of Digits
Topic: Array
Difficulty: Easy

QUESTION:
Given an array of integers nums, return how many numbers
contain an even number of digits.

EXAMPLE:
Input:  [12, 345, 2, 6, 7896]
Output: 2

EXPLANATION:
12 has 2 digits  -> Even
345 has 3 digits -> Odd
2 has 1 digit    -> Odd
6 has 1 digit    -> Odd
7896 has 4 digits -> Even

There are 2 numbers with an even number of digits.

APPROACH:
1. Initialize count to 0.
2. Loop through every number in the array.
3. Convert each number to a string and check its length.
4. If the length is even, increase count.
5. Return count.
*/

var findNumbers = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (String(nums[i]).length % 2 === 0) {
            count++;
        }
    }

    return count;
};

// Test in VS Code
console.log(findNumbers([12, 345, 2, 6, 7896]));
// Expected output: 2
