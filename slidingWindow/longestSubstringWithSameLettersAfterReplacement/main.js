// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

const longestSubstring = (input, k) => {
    let windowStart = 0,
        freqCounter = {},
        maxLength = -Infinity,
        maxRepeatLetterCounter = 0;

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];

        if(!(rightChar in freqCounter)) {
            freqCounter[rightChar] = 0;
        }
        freqCounter[rightChar]++;

        maxRepeatLetterCounter = Math.max(maxRepeatLetterCounter, freqCounter[rightChar]);

        if(windowEnd - windowStart + 1 - maxRepeatLetterCounter > k) {
            const leftChar = input[windowStart];
            freqCounter[leftChar]--;
            if(freqCounter[leftChar] === 0){
                delete freqCounter[leftChar];
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(longestSubstring("aabccbb", 2)) // output 5

module.exports = longestSubstring;