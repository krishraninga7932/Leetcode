```javascript
// LeetCode #977 - Squares of a Sorted Array

// Approach:
// 1. Create an empty array.
// 2. Loop through the given array.
// 3. Square each element and push it into the new array.
// 4. Sort the new array in ascending numerical order.
// 5. Return the sorted array.

// Time Complexity: O(n log n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i] * nums[i]);
    }

    arr.sort((a, b) => a - b);

    return arr;
};

// Test Cases

console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Expected Output: [0, 1, 9, 16, 100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
// Expected Output: [4, 9, 9, 49, 121]

console.log(sortedSquares([-5, -2, 1, 4]));
// Expected Output: [1, 4, 16, 25]
```