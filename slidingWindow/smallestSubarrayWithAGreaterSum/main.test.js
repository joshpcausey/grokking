const smallestSubarrayWithAGreaterSum = require('./main');

test('outputs correct value', () => {
    expect(smallestSubarrayWithAGreaterSum([2, 1, 5, 2, 3, 2], 7)).toBe(2);
    expect(smallestSubarrayWithAGreaterSum([2, 1, 5, 2, 8], 7)).toBe(1);
    expect(smallestSubarrayWithAGreaterSum([3, 4, 1, 1, 6], 8)).toBe(3);
});