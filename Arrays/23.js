```javascript
// LeetCode #724 - Find Pivot Index

// Approach:
// 1. Traverse the array using an outer loop.
// 2. Consider each index as a possible pivot.
// 3. Calculate the sum of all elements on the left.
// 4. Calculate the sum of all elements on the right.
// 5. If both sums are equal, return the current index.
// 6. If no pivot is found, return -1.

// Time Complexity: O(n²)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        // Calculate left sum
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }

        // Calculate right sum
        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }

        // Check if current index is the pivot
        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
};

// Test Cases

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// Expected: 3

console.log(pivotIndex([1, 2, 3]));
// Expected: -1

console.log(pivotIndex([2, 1, -1]));
// Expected: 0
```