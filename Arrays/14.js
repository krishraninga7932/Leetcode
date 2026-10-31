
// LeetCode 122 - Best Time to Buy and Sell Stock II

// Approach:
// 1. Start from the second element.
// 2. Compare current price with previous day's price.
// 3. If current price is greater, add the difference to maxprofit.
// 4. Return the total profit.

// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProfit = function(prices) {
    let maxprofit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxprofit += prices[i] - prices[i - 1];
        }
    }

    return maxprofit;
};

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5]));    // 4
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
console.log(maxProfit([1, 3, 2, 5]));       // 5
