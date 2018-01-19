import cond from '../src/cond';

describe('match', () => {
  it('selects the first match', () => {
    const x: number = 4;

    expect(cond([
      [x === 3, () => 'nope'],
      [x < 2, () => 'nope'],
      [x > 1, () => 'yup'],
      [x === 4, () => 'nope']
    ])).toEqual('yup');
  });

  it('results in undefined if no matches', () => {
    const x: number = 4;

    expect(cond([
      [x === 3, () => 'nope'],
      [x === 2, () => 'nope'],
      [x === 1, () => 'nope']
    ])).toEqual(undefined);
  });
});
