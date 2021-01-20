/* eslint-disable import/prefer-default-export */
/*
 * Write simple .camelCase method (camel_case function in PHP,
 * CamelCase in C# or camelCase in Java) for strings.
 * All words must have their first letter capitalized without spaces
 *
 * Example:
 *  camelCase("hello case"); // => "HelloCase"
 *  camelCase("camel case word"); // => "CamelCaseWord"
 */

export function camelCase(str: string): string {
  if (!str.length) return str;

  const results = [];
  const subStrArr = str.trim().split(' ');

  for (const s of subStrArr) {
    results.push(s[0].toUpperCase() + s.substring(1).toLowerCase());
  }

  return results.join('');
}

const res = camelCase('lBZuVzagPQzvhf ZRavqUNCbVegt ivtutUQLiPwy');
console.log(res);
