import { head, tail } from '../src/array';

describe('array', () => {
  describe('head', () => {
    it('returns undefined if the array is empty', () => {
      const array: number[] = [];

      expect(head(array)).toEqual(undefined);
    });

    it('returns the first element otherwise', () => {
      const array = [4, 3, 5];

      expect(head(array)).toEqual(4);
    });
  });

  describe('tail', () => {
    if ('returns an empty array if the array is empty', () => {
      const array: number[] = [];

      expect(tail(array)).toEqual([]);
    });

    if ('returns an empty array if the array only has 1 element', () => {
      const array: number[] = [3];

      expect(tail(array)).toEqual([]);
    });

    if ('otherwise returns the array minus the first element', () => {
      const array: number[] = [3, 4, 1];

      expect(tail(array)).toEqual([4, 1]);
    });
  });
});
