import ifElse from '../src/if-else';

const evenOrOdd = (x: number) =>
  ifElse(x % 2 === 0,
    () => 'even',
    () => 'odd');

