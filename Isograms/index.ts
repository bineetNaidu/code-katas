/* eslint-disable import/prefer-default-export */
/*
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines
 * whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 *
 * URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/typescript
 */

export function isIsogram(str: string) {
  const strArr = str.toLowerCase().split('');
  const uniqueSet = new Set(str.toLowerCase());
  const uniqueArr: string[] = [];
  uniqueSet.forEach((s) => uniqueArr.push(s));

  return JSON.stringify(strArr) === JSON.stringify(uniqueArr);
}

const res = isIsogram('Dermatoglyphics');
console.log(res);
