import ifElse from '../src/if-else';

describe('ifElse', () => {
  it('it\'s true it returns the second arg', () => {
    expect(ifElse(true,
      () => 3,
      () => 4
    )).toEqual(3);
  });

  it('it\'s false it returns the third arg', () => {
    expect(ifElse(false,
      () => 3,
      () => 4
    )).toEqual(4);
  });
});
