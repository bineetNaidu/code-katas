/*
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 *  For example,
 * the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
 * Ignore numbers and punctuation.
 */

function isPangram(string: string): boolean {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const sortedSet = new Set(string.toLowerCase().match(/[a-z]/gi).sort());
  const sortedArr = [];
  sortedSet.forEach((s) => sortedArr.push(s));

  let result = false;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < sortedArr.length; i++) {
    const element = sortedArr[i];
    const matcherEl = alphabet[i];
    if (element === matcherEl) {
      if (sortedArr.length === 1) {
        return (result = false);
      }
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

const result = isPangram('aaaaaaaaaaaaaaaaaaaaaaaaaa');
console.log(result);
