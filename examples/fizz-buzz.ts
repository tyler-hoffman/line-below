import ifElse from '../src/if-else';
import cond from '../src/cond';
import range from '../src/range';

export default (max: number) =>
  range(max)
    .map((x: number) => cond([
      [!(x % 3 || x % 5), () => 'fizzBuzz'],
      [!(x % 3), () => 'fizz'],
      [!(x % 5), () => 'buzz'],
      [true, () => `${x}`]
    ]));
