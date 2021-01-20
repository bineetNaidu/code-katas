/* eslint-disable import/prefer-default-export */
/*
 * Complete the function that accepts a string parameter,
 * and reverses each word in the string. All spaces in the string should
 * be retained.
 *
 * Example
 *  "This is an example!" ==> "sihT si na !elpmaxe"
 *  "double  spaces"      ==> "elbuod  secaps"
 */

export function reverseWords(str: string): string {
  // TODO your code here
  return str
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ');
}

const result = reverseWords('This is an example!');

console.log(result);
