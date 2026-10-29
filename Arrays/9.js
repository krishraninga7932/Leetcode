
/*
LeetCode #26: Remove Duplicates from Sorted Array

Approach:
1. Use nested loops to compare elements.
2. If two elements are equal, remove the duplicate.
3. Decrease j because the next element shifts into the removed element's position.
4. Return the length of the array.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    }

    return nums.length;
};

// Test Case 1
let nums1 = [1, 1, 2];
console.log("Unique count:", removeDuplicates(nums1));
console.log("Array:", nums1);

// Test Case 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Unique count:", removeDuplicates(nums2));
console.log("Array:", nums2);


// OR=============================
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(i===0||nums[i]!=nums[i-1]){
            arr.push(nums[i])
        }
    }
    for(let i=0;i<arr.length;i++){
        nums[i]=arr[i]
    }
    return arr.length
};