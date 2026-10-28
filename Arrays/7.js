/*
LeetCode #88: Merge Sorted Array
Topic: Arrays
Difficulty: Easy

Question:
Merge nums2 into nums1 so that the final array is sorted
in ascending order.

Example:
nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6], n = 3

Output:
[1, 2, 2, 3, 5, 6]

Approach:
1. Copy the first m valid elements from nums1 into arr.
2. Copy the n elements from nums2 into arr.
3. Sort arr using nested loops and swapping.
4. Copy the sorted values back into nums1.

Time Complexity: O((m + n)^2)
Space Complexity: O(m + n)
*/

var merge = function(nums1, m, nums2, n) {
    let arr = [];

    // Step 1: Copy valid elements from nums1
    for (let i = 0; i < m; i++) {
        arr.push(nums1[i]);
    }

    // Step 2: Copy elements from nums2
    for (let j = 0; j < n; j++) {
        arr.push(nums2[j]);
    }

    // Step 3: Sort arr in ascending order
    for (let k = 0; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
            if (arr[k] > arr[l]) {
                let temp = arr[k];
                arr[k] = arr[l];
                arr[l] = temp;
            }
        }
    }

    // Step 4: Copy the sorted values into nums1
    for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i];
    }
};

// Test case 1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
console.log(nums1); // [1, 2, 2, 3, 5, 6]

// Test case 2
let nums3 = [1];
let nums4 = [];

merge(nums3, 1, nums4, 0);
console.log(nums3); // [1]

// Test case 3
let nums5 = [0];
let nums6 = [1];

merge(nums5, 0, nums6, 1);
console.log(nums5); // [1]