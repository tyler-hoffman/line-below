import fizzBuzz from '../examples/fizz-buzz';

describe('the fizz', () => {
  it('works', () => {
    expect(fizzBuzz(17)).toEqual([
      'fizzBuzz',
      '1',
      '2',
      'fizz',
      '4',
      'buzz',
      'fizz',
      '7',
      '8',
      'fizz',
      'buzz',
      '11',
      'fizz',
      '13',
      '14',
      'fizzBuzz',
      '16',
    ])
  });
});
