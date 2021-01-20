function isPangramBestPractise(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.indexOf(x) !== -1);
}
