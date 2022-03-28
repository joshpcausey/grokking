var findRepeatedDnaSequences = function(s) {
    let windowStart = 0,
        hashMap = {},
        sequences = [];
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if(!(rightChar in hashMap)) {
            hashMap[rightChar] = 0;
        }
        hashMap[rightChar]++;
        
        while(Object.keys(hashMap).length > 2) {
            const leftChar = s[windowStart];
            hashMap[leftChar]--;
            if(hashMap[leftChar] === 0) {
                delete hashMap[leftChar];
            }
            windowStart++;
        }
        
        if(windowEnd - windowStart + 1 >= 10) {
            sequences.push(s.substring(windowStart, windowEnd));
            windowStart = windowEnd;
        }
    }
    
    return sequences;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")) // output ["AAAAACCCCC","CCCCCAAAAA"]