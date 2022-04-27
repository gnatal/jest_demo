const acumulator = require('./acumulate');

beforeEach(() => {
    acumulator.clear();
})

test('acumulating 1, 2, 3 and 4 to be 10', () => {
    acumulator.acc(1);
    acumulator.acc(2);
    acumulator.acc(3);
    expect(acumulator.acc(4)).toBe(10);
})

// the first test interfers with the second one so we need to clear the acumulator before each test
// also we could use test.only to run only one test
test('acumulating 10, 20, 30 and 40 to be 100', () => {
    acumulator.acc(10);
    acumulator.acc(20);
    acumulator.acc(30);
    expect(acumulator.acc(40)).toBe(100);
})