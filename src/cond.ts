import { Predicate, Lazy } from './types';
import { ifElse } from './if-else';

export type CondOption<T, U> = [Predicate<T>, Lazy<U>];

export default <T, U>(options: CondOption<T, U>[]) =>
  (t: T) =>
    ifElse(!options.length,
      () => undefined,
      () => ifElse());



