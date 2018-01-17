import { Lazy } from './types';
import cond, { condOption, CondOption } from './cond';

export type MatchOption<T, U> = [T, Lazy<U>];
const condition = <T>(m: MatchOption<T, any>): T => m[0];
const evaluation = <T>(m: MatchOption<any, T>): Lazy<T> => m[1];
const matchOptionToCondOption = <T, U>([t, l]: MatchOption<T, U>) =>
  condOption((x: T) => x === t, l);

const match = <T, U>(options: MatchOption<T, U>[]) =>
  cond(options.map(matchOptionToCondOption));

export default match;
