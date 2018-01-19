type Tuple<T> = [T, T];

type EitherTuple = (Tuple<string> | Tuple<number>);
const doSomething = (tupples: EitherTuple[]) => {
  // code here
};

const valid = doSomething([
  [2, 3],
  [4, 4]
]);

const alsoValid = doSomething([
  ['3', '4'],
  ['1', '1']
]);

const moreValid = doSomething([
  [2, 3],
  ['4', '4']
]);


const invalid = doSomething([
  [2, 3],
  [1, '3'], // <- wrong
  ['4', '4'],
  23
]);
