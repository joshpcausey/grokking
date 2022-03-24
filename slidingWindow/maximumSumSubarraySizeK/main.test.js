const maximumSumOfSubarraySizeK = require('./main');

test('outputs correct value', () => {
    expect(maximumSumOfSubarraySizeK([2, 1, 5, 1, 3, 2], 3)).toBe(9);
    expect(maximumSumOfSubarraySizeK([2, 3, 4, 1, 5], 2)).toBe(7);
});