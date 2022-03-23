const longestSubstringWithKDistinctChars = require('./main');

test('outputs correct value', () => {
    expect(longestSubstringWithKDistinctChars("araaci", 2)).toBe(4);
    expect(longestSubstringWithKDistinctChars("araaci", 1)).toBe(2);
    expect(longestSubstringWithKDistinctChars("cbbebi", 3)).toBe(5);
});