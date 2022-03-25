// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) 
// of a string having NN characters. For example, here are the six anagrams of the string “abc”:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

const anagrams = (input, pattern) => {
    let freqMap = {},
        windowStart = 0,
        idxs = [],
        matched = 0;

    for(let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if(!(char in freqMap)) {
            freqMap[char] = 0;
        }
        freqMap[char]++;
    }

    for(windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];

        if(rightChar in freqMap) {
            freqMap[rightChar]--;
            if(freqMap[rightChar] === 0) {
                matched++;
            }
        }

        if(matched === Object.keys(freqMap).length) {
            idxs.push(windowStart);
        }

        if(windowEnd - windowStart >= pattern.length - 1) {
            const leftChar = input[windowStart];
            windowStart++;
            if(leftChar in freqMap){
                if(freqMap[leftChar] === 0){
                    matched--;
                }
                freqMap[leftChar]++
            }
        }
    }

    return idxs
}

console.log(anagrams("ppqp", "pq")) // output [1, 2]