/* eslint-disable import/prefer-default-export */
/*
 * URL: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript
 *
 * Your task is to sort a given string. Each word in the string will contain a single number. T
 * his number is the position the word should have in the result.
 *  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string.
 * The words in the input String will only contain valid consecutive numbers.
 *
 * Examples:
 *  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 *  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 *  ""  -->  ""
 *
 */

export function order(words: string): string {
  if (!words.length) return words;

  const placementObj = [];
  const results: string[] = [];
  const splitWords = words.split(' ');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < splitWords.length; i++) {
    const element = splitWords[i];
    const placementNum = Number(element.match(/[0-9]/gi)[0]);
    placementObj.push({ position: placementNum, text: element });
  }

  placementObj.sort((a, b) => a.position - b.position);

  placementObj.forEach((obj) => results.push(obj.text));

  return results.join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
