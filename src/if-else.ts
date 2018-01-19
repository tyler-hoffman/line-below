import { Lazy } from './types';

export default <T, F>(expr: boolean, t: Lazy<T>, f: Lazy<F>) =>
  expr ? t() : f();

