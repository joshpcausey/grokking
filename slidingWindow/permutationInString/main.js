// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n!n! permutations.

const hasPermutation = (input, pattern) => {
    let windowStart = 0,
        freqMap = {},
        matched = 0;

    for(let i = 0; i < pattern.length; i++){
        const char = pattern[i];
        if(!(char in freqMap)) {
            freqMap[char] = 0
        }
        freqMap[char]++;
    }

    for(let windowEnd = 0; windowEnd < input.length; windowEnd++) {
        const rightChar = input[windowEnd];

        if(rightChar in freqMap){
            freqMap[rightChar]--;
            if(freqMap[rightChar] === 0){
                matched++
            }
        }

        if(Object.keys(freqMap).length === matched) {
            return true;
        }

        if(windowEnd >= pattern.length - 1) {
            const leftChar = input[windowStart];
            windowStart++;
            if(leftChar in freqMap) {
                if(freqMap[leftChar] === 0) {
                    matched--;
                }
                freqMap[leftChar]++;
            }
        }
    }

    return false;
}

console.log(hasPermutation('oidbcaf', 'abc')) // output true
console.log(hasPermutation('odicf', 'dc')) // output false