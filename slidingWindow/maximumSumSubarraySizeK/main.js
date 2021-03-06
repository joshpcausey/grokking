// Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.

const maximumSumOfSubarraySizeK = (input, k) => {
    let windowStart = 0,
        windowSum = 0,
        maxSum = -Infinity;

    // open window
    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        windowSum += input[windowEnd];

        // our window is greater than k so reduce window and remove the left num
        if(windowEnd - windowStart + 1 > k) {
            windowSum -= input[windowStart];
            windowStart++
        }

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

module.exports = maximumSumOfSubarraySizeK;