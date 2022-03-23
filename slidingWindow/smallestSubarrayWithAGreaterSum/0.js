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

console.log(smallestSubarrayWithAGreaterSum([2, 1, 5, 2, 3, 2], 7)) // output 2
console.log(smallestSubarrayWithAGreaterSum([2, 1, 5, 2, 8], 7)) // output 1
console.log(smallestSubarrayWithAGreaterSum([3, 4, 1, 1, 6], 8)) // output 3