// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longestSubstringWithKDistinctChars = (input, k) => {
    let windowStart = 0,
        charFreqMap = {},
        maxLength = -Infinity;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];
        
        if(!(rightChar in charFreqMap)) {
            charFreqMap[rightChar] = 0
        }
        charFreqMap[rightChar]++;

        while(Object.keys(charFreqMap).length > k) {
            const leftChar = input[windowStart];
            charFreqMap[leftChar]--;
            if(charFreqMap[leftChar] === 0) {
                delete charFreqMap[leftChar];
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