
// LeetCode 1512 - Number of Good Pairs

// Approach:
// 1. Initialize count = 0.
// 2. Use the outer loop to select an element.
// 3. Use the inner loop starting from i + 1.
// 4. Compare the current element with the next elements.
// 5. If both elements are equal, increase count.
// 6. Return the total number of good pairs.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

var numIdenticalPairs = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
};

// Test Cases

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// Expected: 4

console.log(numIdenticalPairs([1, 1, 1, 1]));
// Expected: 6

console.log(numIdenticalPairs([1, 2, 3]));
// Expected: 0

console.log(numIdenticalPairs([2, 2, 3]));
// Expected: 1
