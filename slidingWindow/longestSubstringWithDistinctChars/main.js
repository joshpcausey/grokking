// Given a string, find the length of the longest substring, which has all distinct characters.

const longestSubstringWithDistinctChars = (string) => {
    let windowStart = 0,
        maxLength = -Infinity,
        charIdxMap = {};

    for(let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        const rightChar = string[windowEnd];

        if(rightChar in charIdxMap) {
            windowStart = Math.max(windowStart, charIdxMap[rightChar] + 1);
        }

        charIdxMap[rightChar] = windowEnd;

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

module.exports = longestSubstringWithDistinctChars