// the question was, give a list of prices. return the first index of the longest continuous subsequence with no more than 2 distinct prices

const longestSubequence = (input, k) => {
    let windowStart = 0,
        freqMap = {},
        maxLength = 0,
        maxIdx = -1;

    for(windowEnd = 0; windowEnd < input.length; windowEnd++) {
        rightNum = input[windowEnd];

        if(!(rightNum in freqMap)) {
            freqMap[rightNum] = 0
        }
        freqMap[rightNum]++;

        while(Object.keys(freqMap).length > k) {
            const leftNum = input[windowStart];
            freqMap[leftNum]--;
            if(freqMap[leftNum] === 0) {
                delete freqMap[leftNum];
            }
            windowStart++
        }

        if(windowEnd - windowStart + 1 > maxLength) {
            maxLength = windowEnd - windowStart + 1;
            maxIdx = windowStart;
        }

    }

    return maxIdx
}

console.log(longestSubequence([100,101,101,101,102,102,103], 2)) // return 1