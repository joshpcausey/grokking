// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const longestSubarray = (input, k) => {
    let windowStart = 0,
        maxOnes = 0,
        maxLength = -Infinity;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        if(input[windowEnd] === 1){
            maxOnes++;
        }

        if(windowEnd - windowStart + 1 - maxOnes > k) {
            if(input[windowStart]  === 1) {
                maxOnes--;
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(longestSubarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)) // output 6

module.exports = longestSubarray;