// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallestSubarray = (input, k) => {
    let windowStart = 0,
        windowSum = 0,
        minLength = Infinity;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        windowSum += input[windowEnd];

        while(windowSum >=  k) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= input[windowStart];
            windowStart++;
        }
    }

    if(minLength === Infinity) {
        return 0;
    }

    return minLength;
}

console.log(smallestSubarray([2, 1, 5, 2, 3, 2], 7)) // output 2
console.log(smallestSubarray([2, 1, 5, 2, 8], 7)) // output 1
console.log(smallestSubarray([3, 4, 1, 1, 6], 8)) // output 3