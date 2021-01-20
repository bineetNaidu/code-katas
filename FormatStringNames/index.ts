/**
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas except for the last two names,
 * which should be separated by an ampersand.
 *
 * Example:
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 * ? // returns 'Bart, Lisa & Maggie'
 *  list([ {name: 'Bart'}, {name: 'Lisa'} ])
 * ? // returns 'Bart & Lisa'
 * list([ {name: 'Bart'} ])
 * ? // returns 'Bart'
 * list([])
 * ? // returns ''
 *  Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */

type List = {
  name: string;
};

const list = (names: List[]): string => {
  if (!names.length) return '';
  const result = [];
  for (const { name } of names) result.push(name);
  return result.length === 1
    ? `${result[0]}`
    : `${result.slice(0, result.length - 1).join(', ')} & ${
      result[result.length - 1]
    }`;
};

const res = list([
  { name: 'Moe' },
  { name: 'Homer' },
  { name: 'Maude' },
  { name: 'Lisa' },
  { name: 'Marge' },
  { name: 'Seymour' },
  { name: 'Ned' },
  { name: 'Maggie' },
  { name: 'Barney' },
]);
console.log(res);
