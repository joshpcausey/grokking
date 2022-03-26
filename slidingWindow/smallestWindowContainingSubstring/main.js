// Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

const smallestSubstring = (input, pattern) => {
    let windowStart = 0,
        patternMap = {},
        minString = input.length + 1,
        matched = 0;

    for(let i = 0; i < pattern.length; i++) {
        char = pattern[i];
        if(!(char in patternMap)) {
            patternMap[char] = 0;
        }
        patternMap[char]++;
    }

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];

        if(rightChar in patternMap) {
            patternMap[rightChar]--;
            if(patternMap[rightChar] >= 0) {
                matched++;
            }
        }

        while(matched === pattern.length) {
            if (minString.length > windowEnd - windowStart + 1) {
                
            }
        }
    }
}

console.log(smallestSubstring("aabdec", "abc")) // output abdec