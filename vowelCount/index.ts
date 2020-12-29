/*
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

export class Kata {
  static getCount(str: string) {
    const count = str.match(/a|e|i|o|u/gi);
    return count ? count.length : 0;
  }
}

const res = Kata.getCount('my pyx');
console.log(res);
