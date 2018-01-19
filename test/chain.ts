import { chain } from '../src/chain';

describe('chain', () => {
  it('can map a bunch of stuff', () => {
    const mapping = chain('14.4')
      .map(str => parseInt(str, 10))
      .map(Math.floor)
      .map(x => x * 2)
      .map(x => ({
        number: x
      }))
      .value();

    expect(mapping).toEqual({ number: 28 });
  });
});
