import cond from '../src/cond';

describe('cond', () => {
  it('selects the first match', () => {
    const switcher = ([
      [(x: number) => x == 1, () => '1'],
      [x => x == 2, () => '2'],
      [x => x == 3, () => '3'],
      [x => x == 4, () => '444'],
      [x => x == 5, () => '5'],
      [x => x == 4, () => '4'],
      [x => x == 5, () => 9],
    ]);

    expect(switcher(4)).toEqual('444');
  });

  it('returns undefined if there are no matches', () => {
    const switcher = ([
      [(x: number) => x == 1, () => '1'],
      [x => x == 2, () => '2'],
      [x => x == 3, () => '3'],
      [x => x == 4, () => '444'],
      [x => x == 5, () => '5'],
      [x => x == 4, () => '4'],
      [x => x == 5, () => 9],
    ]);

    expect(switcher(6)).toEqual(undefined);
  });
});