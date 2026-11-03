```javascript
// LeetCode #1732 - Find the Highest Altitude

// Approach:
// 1. Initialize current altitude with 0.
// 2. Initialize maximum altitude with 0.
// 3. Traverse the gain array.
// 4. Add each gain value to the current altitude.
// 5. If current altitude is greater than maximum altitude,
//    update maximum altitude.
// 6. Return the maximum altitude.

// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;
    let maxalt = 0;

    for (let i = 0; i < gain.length; i++) {
        alt += gain[i];

        if (alt > maxalt) {
            maxalt = alt;
        }
    }

    return maxalt;
};

// Test Cases

console.log(largestAltitude([-5, 1, 5, 0, -7]));
// Expected: 1

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// Expected: 0

console.log(largestAltitude([3, -2, 4]));
// Expected: 5
```