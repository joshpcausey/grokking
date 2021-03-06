// Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.

const maxSum = (input, k) => {
    let windowStart = 0,
        windowSum = 0,
        maxSum = 0;

    for(windowEnd = 0; windowEnd < input.length; windowEnd++) {
        windowSum += input[windowEnd];

        if(windowEnd - windowStart + 1 > k) {
            windowSum -= input[windowStart];
            windowStart++;
        }

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3)); // output 9
console.log(maxSum([2, 3, 4, 1, 5], 2)); // output 7