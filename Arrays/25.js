```javascript
// LeetCode #1748 - Sum of Unique Elements

// Approach:
// 1. Initialize sum = 0.
// 2. Traverse the array using an outer loop.
// 3. Initialize count = 0 for every element.
// 4. Use an inner loop to check the current element
//    against every element in the array.
// 5. Increase count whenever two elements are equal.
// 6. If count is exactly 1, add that element to sum.
// 7. Return the final sum.

// Time Complexity: O(n²)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }

        if (count == 1) {
            sum += nums[i];
        }
    }

    return sum;
};

// Test Cases

console.log(sumOfUnique([1, 2, 3, 2]));
// Expected: 4

console.log(sumOfUnique([4, 4, 5, 7]));
// Expected: 12

console.log(sumOfUnique([1, 1, 1]));
// Expected: 0

console.log(sumOfUnique([5]));
// Expected: 5
```