import { Lazy } from './types';
import { head, tail } from './array';
import ifElse from './if-else';

export type MatchOption<T> = [boolean, Lazy<T>];

export const matchOption = <T>(condition: boolean, out: Lazy<T>): MatchOption<T> =>
  [condition, out];
export const condition = (option: MatchOption<any>) => option[0];
export const evaluation = <T>(option: MatchOption<T>) => option[1]();

const match = <T>(options: MatchOption<T>[]): T | undefined =>
  ifElse(!options.length,
    () => undefined,
    () => ifElse(condition(head(options)),
      () => evaluation(head(options)),
      () => match(tail(options))));

export default match;
