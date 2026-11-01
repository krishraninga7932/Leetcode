
// LeetCode 1470 - Shuffle the Array

// Approach:
// 1. Create an empty array called ans.
// 2. Loop from 0 to n-1.
// 3. Push nums[i] (first half).
// 4. Push nums[i + n] (second half).
// 5. Return ans.

// Time Complexity: O(n)
// Space Complexity: O(n)

var shuffle = function(nums, n) {
    let ans = [];

    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[i + n]);
    }

    return ans;
};

// Test Cases
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// Expected: [2, 3, 5, 4, 1, 7]

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4));
// Expected: [1, 5, 2, 6, 3, 7, 4, 8]

console.log(shuffle([1, 1, 2, 2], 2));
// Expected: [1, 2, 1, 2]
