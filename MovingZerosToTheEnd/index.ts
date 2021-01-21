/**
 * Moving Zeros To The End (5 kyu)
 *
 * Write an algorithm that takes an array and moves all of the zeros to the end,
 * preserving the order of the other elements.
 *
 * Example:
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

const moveZeros = (arr: any[]) => {
  const zerosArr: number[] = [];
  const resultArr: any[] = [];
  arr.forEach((i) => {
    if (i === 0) zerosArr.push(i);
    if (i !== 0) resultArr.push(i);
  });

  return [...resultArr, ...zerosArr];
};

console.log(moveZeros(['a', false, 11, 1, 2, 3, 0, 0, 'b']));
