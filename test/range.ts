import range from '../src/range';

describe('range', () => {
  it('evaluates to an empty array if passed 0', () => {
    expect(range(0)).toEqual([]);
  });

  it('otherwise evaluates to [0, x)]', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
});
