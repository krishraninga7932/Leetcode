
// LeetCode 1365 - How Many Numbers Are Smaller Than the Current Number

// Approach:
// 1. Create an empty array called arr.
// 2. Loop through every element using the outer loop.
// 3. Initialize count = 0 for every element.
// 4. Use the inner loop starting from j = 0.
// 5. Compare the current element with every element.
// 6. If nums[i] > nums[j], increase count.
// 7. Push count into arr.
// 8. Return arr.

// Time Complexity: O(n^2)
// Space Complexity: O(n)

var smallerNumbersThanCurrent = function(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }

        arr.push(count);
    }

    return arr;
};

// Test Cases

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// Expected: [4, 0, 1, 1, 3]

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
// Expected: [2, 1, 0, 3]

console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
// Expected: [0, 0, 0, 0]
