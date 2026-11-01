
// LeetCode 1920 - Build Array from Permutation

// Approach:
// 1. Create an empty array called ans.
// 2. Loop through every index of nums.
// 3. Access nums[nums[i]] to get the required value.
// 4. Push that value into ans.
// 5. Return the new array.

// Time Complexity: O(n)
// Space Complexity: O(n)

var buildArray = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }

    return ans;
};

// Test Cases
console.log(buildArray([0, 2, 1, 5, 3, 4]));
// Expected: [0, 1, 2, 4, 5, 3]

console.log(buildArray([2, 0, 1]));
// Expected: [1, 2, 0]

console.log(buildArray([5, 0, 1, 2, 3, 4]));
// Expected: [4, 5, 0, 1, 2, 3]
