const longestSubstringWithDistinctChars = require('./main');

test('outputs correct value', () => {
    expect(longestSubstringWithDistinctChars('aabccbb')).toBe(3);
    expect(longestSubstringWithDistinctChars('abbbb')).toBe(2);
    expect(longestSubstringWithDistinctChars('abccde')).toBe(3);
    expect(longestSubstringWithDistinctChars('abba')).toBe(2);

});