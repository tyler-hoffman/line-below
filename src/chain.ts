type Fn<T, U> = (t: T) => U;
type Chain<T> = {
  map: <U>(fn: Fn<T, U>) => Chain<U>;
  value: () => T;
}

export const chain = <T>(t: T): Chain<T> => ({
  map: <U>(fn: (t: T) => U) => chain(fn(t)),
  value: () => t
});
