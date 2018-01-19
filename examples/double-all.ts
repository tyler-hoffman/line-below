

export const doubleAll = (array: number[]) =>
  array.map(x => x * 2);



  
export const doubleAll2 = (array: number[]) => {
  return array.map(x => {
    return x * 2
  });
}




export const doubleAll3 = (array: number[]) => {
  const output: number[] = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}



const array: number[] = [1, 2, 3];
let i: number;
export const doubleAll4 = () => {
  for (i = 0; i < array.length; i++) {
    array[i] *= 2;
  }

}
