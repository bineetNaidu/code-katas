// write a function that returns a array of the FizzBuzz sequence

const fizzBuzz = (n: number): number[] => {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
};
