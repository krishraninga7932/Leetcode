
// LeetCode 1431 - Kids With the Greatest Number of Candies

// Approach:
// 1. Create an empty array called ans.
// 2. Find the maximum candies manually using a for loop.
// 3. Check each kid's candies after adding extraCandies.
// 4. If the total is >= max, push true.
// 5. Otherwise, push false.
// 6. Return the ans array.

// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let max = 0;

    // Find maximum candies
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }

    // Check each kid
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};

// Test Cases
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// Expected: [true, true, true, false, true]

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
// Expected: [true, false, false, false, false]

console.log(kidsWithCandies([12, 1, 12], 10));
// Expected: [true, false, true]
