
// LeetCode 1929 - Concatenation of Array

// ==========================================
// APPROACH 1: Using Two For Loops + push()
// ==========================================

// Time Complexity: O(n)
// Space Complexity: O(n)

var getConcatenation = function(nums) {
    let ans = [];

    // First copy of nums
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    // Second copy of nums
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    return ans;
};


// ==========================================
// APPROACH 2: Using concat()
// ==========================================

// Time Complexity: O(n)
// Space Complexity: O(n)

// var getConcatenation = function(nums) {
//     let arr1 = [];
//     let arr2 = [];

//     for (let i = 0; i < nums.length; i++) {
//         arr1.push(nums[i]);
//         arr2.push(nums[i]);
//     }

//     let ans = arr1.concat(arr2);

//     return ans;
// };


// ==========================================
// APPROACH 3: Using Spread Operator (...)
// ==========================================

// Time Complexity: O(n)
// Space Complexity: O(n)

// var getConcatenation = function(nums) {
//     let ans = [...nums, ...nums];
//     return ans;
// };


// ==========================================
// TEST CASES
// ==========================================

console.log(getConcatenation([1, 2, 1]));
// Expected: [1, 2, 1, 1, 2, 1]

console.log(getConcatenation([1, 3, 2, 1]));
// Expected: [1, 3, 2, 1, 1, 3, 2, 1]
