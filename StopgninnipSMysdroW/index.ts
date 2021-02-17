export default function spinWords(sentence: string) {
  return sentence
    .split(' ')
    .map((str) => (str.length >= 5 ? str.split('').reverse().join('') : str))
    .join(' ');
}
