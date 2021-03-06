/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/*
 * You probably know the "like" system from Facebook and other pages.
 * People can "like" blog posts, pictures or other items. We
 * want to create the text that should be displayed next to such an item.
 * Implement a function likes :: [String] -> String, which must take in input array
 * containing the names of people who like an item.
 * It must return the display text as shown in the examples:
 */
/*
 * Example
 * ```
 * likes [] -- must be "no one likes this"
 * likes ["Peter"] -- must be "Peter likes this"
 * likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
 * ```
 */

function likesNames(names: string[] | []) {
  if (!names.length) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likesNames(['Alex', 'Jacob', 'Mark', 'Max']));
