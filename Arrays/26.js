```javascript
// LeetCode #1588 - Sum of All Odd Length Subarrays

// Approach:
// 1. Initialize sum = 0.
// 2. Generate odd subarray lengths: 1, 3, 5, etc.
// 3. Use the second loop to select the starting index.
// 4. Use the third loop to traverse continuous elements.
// 5. Calculate the sum of each subarray.
// 6. Add each subarray sum to the final sum.
// 7. Return the final sum.

// Time Complexity: O(n³)
// Space Complexity: O(1)

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;

    for (let length = 1; length <= arr.length; length += 2) {

        for (let i = 0; i <= arr.length - length; i++) {

            let subarraySum = 0;

            for (let j = i; j < i + length; j++) {
                subarraySum += arr[j];
            }

            sum += subarraySum;
        }
    }

    return sum;
};

// Test Cases

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
// Expected: 58

console.log(sumOddLengthSubarrays([1, 2]));
// Expected: 3

console.log(sumOddLengthSubarrays([10, 11, 12]));
// Expected: 66
```