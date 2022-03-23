// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longestSubstringWithKDistinctChars = (input, k) => {
    let windowStart = 0,
        charFreqCounter = {},
        maxLength = -Infinity;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];

        if(!(rightChar in charFreqCounter)) {
            charFreqCounter[rightChar] = 0;
        }
        charFreqCounter[rightChar]++;

        while(Object.keys(charFreqCounter).length > k) {
            const leftChar = input[windowStart];
            charFreqCounter[leftChar]--;
            if(charFreqCounter[leftChar] === 0) {
                delete charFreqCounter[leftChar];
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithKDistinctChars("araaci", 2)) // output 4
console.log(longestSubstringWithKDistinctChars("araaci", 1)) // output 2
console.log(longestSubstringWithKDistinctChars("cbbebi", 3)) // output 5