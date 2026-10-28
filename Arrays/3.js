
/*
LeetCode Problem #485: Max Consecutive Ones
Topic: Array
Difficulty: Easy

QUESTION:
Given a binary array nums, return the maximum number
of consecutive 1s in the array.

EXAMPLE:
Input:  [1, 1, 0, 1, 1, 1]
Output: 3

EXPLANATION:
The first group contains 2 consecutive 1s.
The second group contains 3 consecutive 1s.
The maximum consecutive count is 3.

APPROACH:
1. Use count to track the current streak of 1s.
2. Use maxcount to store the largest streak so far.
3. If the current number is 1, increase count.
4. If count is greater than maxcount, update maxcount.
5. If the current number is 0, reset count to 0.
6. Return maxcount.
*/

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxcount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;

            if (count > maxcount) {
                maxcount = count;
            }
        } else {
            count = 0;
        }
    }

    return maxcount;
};

// Test the solution in VS Code
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// Expected output: 3
