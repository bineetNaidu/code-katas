function isAnagram(word1: string, word2: string) {
  const sorted1 = word1.split('').sort().join('');
  const sorted2 = word2.split('').sort().join('');
  return sorted1 === sorted2;
}

function anagrams(word: string, words: string[]) {
  const anagramsArr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < words.length; i++) {
    if (isAnagram(word, words[i])) {
      anagramsArr.push(words[i]);
    }
  }
  return anagramsArr;
}
