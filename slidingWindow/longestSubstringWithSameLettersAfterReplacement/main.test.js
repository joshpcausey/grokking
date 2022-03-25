const longestSubstring = require('./main');

test('outputs correct value', () => {
    expect(longestSubstring("aabccbb", 2)).toBe(5);
    expect(longestSubstring("abbcb", 1)).toBe(4);
    expect(longestSubstring("abccde", 1)).toBe(3);
});