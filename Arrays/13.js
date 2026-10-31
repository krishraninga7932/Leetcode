
/*
LeetCode #121: Best Time to Buy and Sell Stock

Approach: Nested Loops

Steps:
1. Use the outer loop to select the buying day.
2. Use the inner loop to select a selling day after buying.
3. Calculate profit = selling price - buying price.
4. Update maxProfit whenever we find a higher profit.
5. Return the maximum profit.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let currentprofit = prices[j] - prices[i];

            if (currentprofit > maxprofit) {
                maxprofit = currentprofit;
            }
        }
    }

    return maxprofit;
};

// Test Case 1
let prices1 = [7, 1, 5, 3, 6, 4];
console.log("Maximum Profit:", maxProfit(prices1));
// Expected Output: 5

// Test Case 2
let prices2 = [7, 6, 4, 3, 1];
console.log("Maximum Profit:", maxProfit(prices2));
// Expected Output: 0

// Test Case 3
let prices3 = [2, 4, 1];
console.log("Maximum Profit:", maxProfit(prices3));
// Expected Output: 2
