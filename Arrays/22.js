```javascript
// LeetCode #1299 - Replace Elements with Greatest Element on Right Side

// Approach:
// 1. Initialize max = -1 because the last element has nothing on its right.
// 2. Traverse the array from right to left.
// 3. Store the current element in temp.
// 4. Replace the current element with max.
// 5. Update max if temp is greater than max.
// 6. Return the modified array.

// Time Complexity: O(n)
// Space Complexity: O(1) - In-place modification

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];

        arr[i] = max;

        max = Math.max(max, temp);
    }

    return arr;
};

// Test Cases

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// Expected: [18, 6, 6, 6, 1, -1]

console.log(replaceElements([10, 5, 8, 3]));
// Expected: [8, 8, 3, -1]

console.log(replaceElements([400]));
// Expected: [-1]
```