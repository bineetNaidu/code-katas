/* eslint-disable import/prefer-default-export */
export function xo(str: string) {
  let numOfxs: number = 0;
  let numOfos: number = 0;
  const strArr = str.toLowerCase().split('');

  for (const s of strArr) {
    if (s === 'x') {
      numOfxs += 1;
    }
    if (s === 'o') {
      numOfos += 1;
    } else {
      if (!str.toLowerCase().includes('x' && 'o')) {
        return false;
      }
      continue;
    }
  }

  return numOfxs === numOfos;
}

console.log(xo('xxOo'));
