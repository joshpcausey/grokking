// Given a string, find the length of the longest substring, which has all distinct characters.

const longestSubstringWithDistinctChars = (input) => {
    let windowStart = 0,
        charIdxMap = {},
        maxLength = -Infinity;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];
        if(rightChar in charIdxMap) {
            windowStart = Math.max(windowStart, charIdxMap[rightChar] + 1);
        }

        charIdxMap[rightChar] = windowEnd;

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithDistinctChars('aabccbb')) // output 3