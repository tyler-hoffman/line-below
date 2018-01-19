import ifElse from './if-else';

const range = (x: number): number[] =>
  ifElse(x <= 0,
    () => [],
    () => [...range(x - 1), x - 1]);

export default range;
