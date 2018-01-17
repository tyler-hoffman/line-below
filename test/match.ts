import match from '../src/match';

describe('match', () => {
  it('selects the first match', () => {
    const output = match([
      [1, () => '1'],
      [2, () => '2'],
      [3, () => '3'],
      [4, () => '444'],
      [5, () => '5'],
      [4, () => '4'],
      [5, () => 9]
    ]);

    expect(output(4)).toEqual('444');
  });

  it('returns undefined if there are no matches', () => {
    const output = match([
      [1, () => '1'],
      [2, () => '2'],
      [3, () => '3'],
      [4, () => '444'],
      [5, () => '5'],
      [4, () => '4'],
      [5, () => 9]
    ]);

    expect(output(6)).toEqual(undefined);
  });
});
