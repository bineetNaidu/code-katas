/**
 * @param {number[]} a 
 * @param {number[]} b 
 */
function arrayDiff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}