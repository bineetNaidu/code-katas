/* eslint-disable import/prefer-default-export */
export class Kata {
  static spinWords(words: string) {
    return words
      .split(' ') // ? Split words up
      .map((w: string) => (w.length >= 5 ? w.split('').reverse().join('') : w))
      .join(' '); // ? Put them back together
  }
}
