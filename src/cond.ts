import { Predicate, Lazy } from './types';
import { head, tail } from './array';
import ifElse from './if-else';

export type CondOption<T, U> = [Predicate<T>, Lazy<U>];
export const predicate = <T>(option: CondOption<T, any>) => option[0];
export const evaluation = <T>(option: CondOption<any, T>) => option[1];

const cond = <T, U>(options: CondOption<T, U>[]) => (t: T): U | undefined =>
  ifElse(!options.length,
    () => undefined,
    () => ifElse(predicate(head(options))(t),
      () => evaluation(head(options))(),
      () => cond(tail(options))(t)));

export default cond;
