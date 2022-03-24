// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallestSubarrayWithAGreaterSum = (input, k) => {
    let windowStart = 0,
        windowSum = 0,
        minLength = Infinity;

    // open window
    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        // keep adding next element to windowSum
        windowSum += input[windowEnd];

        // windowSum is greater than or equal to k, time to shrink window
        while(windowSum >= k) {
            // set min length
            minLength = Math.min(minLength, windowEnd - windowStart + 1);

            // shrink window
            windowSum -= input[windowStart];
            windowStart++;
        }
    }

    return minLength;
}

module.exports = smallestSubarrayWithAGreaterSum;