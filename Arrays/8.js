/*
LeetCode #27: Remove Element
Topic: Arrays
Difficulty: Easy

Question:
Remove all occurrences of val from nums.
Return the number of elements that are not equal to val.

Example:
Input: nums = [3, 2, 2, 3], val = 3
Output: 2
Remaining elements: [2, 2]

Approach:
1. Create an empty array called arr.
2. Add elements that are not equal to val into arr.
3. Copy elements from arr back into nums.
4. Return arr.length.

Time Complexity: O(n)
Space Complexity: O(n)
*/

var removeElement = function(nums, val) {
    let arr = [];

    // Step 1: Store elements that are not equal to val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            arr.push(nums[i]);
        }
    }

    // Step 2: Copy elements back into nums
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }

    // Step 3: Return the number of remaining elements
    return arr.length;
};

// Test case 1
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let result1 = removeElement(nums1, val1);

console.log("Count:", result1); // 2
console.log("Remaining elements:", nums1.slice(0, result1)); // [2, 2]

// Test case 2
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let result2 = removeElement(nums2, val2);

console.log("Count:", result2); // 5
console.log("Remaining elements:", nums2.slice(0, result2)); // [0, 1, 3, 0, 4]