/* eslint-disable comma-dangle */
/*
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
 * IPs should be considered valid if the consist of four octets,
 * with values between 0 and 255, inclusive.
 * Input to the function is guaranteed to be a single string.
 *
 * Examples
 *
 * Valid inputs:
 *  1.2.3.4
 *  123.45.67.89
 *
 * Invalid inputs:
 *  1.2.3
 *  1.2.3.4.5
 *  123.456.78.90
 *  123.045.067.089
 */

function isValidIP(ip: string) {
  if (!ip) return false;
  if (!ip.includes('.')) return false;
  if (ip.includes('..')) return false;
  if (ip.includes('-')) return false;
  if (ip.match(/\n/gi)) return false;

  const [one, two, three, four, ...rest] = ip.split('.');
  if (rest.length) return false;
  if (typeof four === 'undefined') return false;
  if (one[0] === '0' && one.length < 1) return false;
  if (one.match(/[a-z]/gi)) return false;
  if (two.match(/[a-z]/gi)) return false;
  if (three.match(/[a-z]/gi)) return false;
  if (four.match(/[a-z]/gi)) return false;

  let result = false;

  for (const numStr of [one, two, three, four]) {
    if (numStr.length === 2 && numStr[0] === '0') return (result = false);
    if (!numStr) return (result = false);
    if (Number(numStr) >= 0 && Number(numStr) < 255) {
      result = true;
      continue;
    } else {
      return (result = false);
    }
  }

  return result;
}

console.log(
  isValidIP(`1.2.3.4




`)
);
