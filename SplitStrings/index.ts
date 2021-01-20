/* eslint-disable no-plusplus */
/**
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters
 * then it should replace the missing second character of the final pair with an underscore ('_').
 *
 * Example
 *  splitStrings('abc') // should return [ 'ab' , 'c_' ]
 *  splitStrings('abcdef') // should return [ 'ab' , 'cd' , 'ef ]
 */

function splitStrings(str: string): string[] {
  const isEven = str.length % 2 === 0;
  const result = [];
  if (isEven) {
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      const isOdd = i % 2 !== 0;
      if (!isOdd) {
        result.push(element + str[i + 1]);
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      const isOdd = i % 2 !== 0;
      if (!isOdd) {
        result.push(element + str[i + 1]);
      }
    }
    const dangleString = result[result.length - 1].replace('undefined', '_');
    result.pop();
    result.push(dangleString);
  }
  return result;
}

console.log(splitStrings('abc'));
