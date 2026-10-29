/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i=0;i<nums.length;i++){
        let count=0 
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j]){
                count++
            }
        }
        if(count>nums.length/2){
            return nums[i]
        }
    }
};




// OR===================================

/*
LeetCode #169: Majority Element

Approach: Sorting

Steps:
1. Sort the array in ascending order.
2. Find the middle index using Math.floor().
3. Return the element at the middle index.

Why it works:
The majority element appears more than half the time,
so it must occupy the middle position after sorting.

Time Complexity: O(n log n)
Extra Space: Depends on JavaScript's sorting implementation.
*/

var majorityElement = function(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Find and return the middle element
    return nums[Math.floor(nums.length / 2)];
};

// Test Case 1
let nums1 = [3, 2, 3];
console.log("Majority Element:", majorityElement(nums1));
// Expected Output: 3

// Test Case 2
let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log("Majority Element:", majorityElement(nums2));
// Expected Output: 2

// Test Case 3
let nums3 = [1];
console.log("Majority Element:", majorityElement(nums3));
// Expected Output: 1
