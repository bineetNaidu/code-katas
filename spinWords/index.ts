/* eslint-disable import/prefer-default-export */
/*
 * Write a function that takes in a string of one or more words,
 * and returns the same string, but with all five or more letter
 * words reversed (Just like the name of this Kata).
 * Strings passed in will consist of only letters and spaces. Spaces will be
 * included only when more than one word is present.
 */
/*
 * Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This
 * is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */

export class Kata {
  static spinWords(words: string) {
    const splitWords = words.split(' ');
    const spinnedWord: string[] = [];

    if (splitWords.length) {
      for (const word of splitWords) {
        const lenghtOfWord = word.length;

        if (lenghtOfWord >= 5) {
          const splitWordsArr = word.split('');
          spinnedWord.push(splitWordsArr.reverse().join(''));
        } else {
          spinnedWord.push(word);
        }
      }
    }
    return spinnedWord.join(' ');
  }
}

console.log(Kata.spinWords('Hey fellow warriors'));
