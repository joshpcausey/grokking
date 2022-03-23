const maxFruits = require('./main');

test('outputs correct value', () => {
    expect(maxFruits(['A', 'B', 'C', 'A', 'C'])).toBe(3);
    expect(maxFruits(['A', 'B', 'C', 'B', 'B', 'C'])).toBe(5);
});