export function descendingOrder(n: number) {
  let result = [];
  const numStrArr = n.toString().split('');
  for (let numStr of numStrArr) {
    result.push(Number(numStr));
  }
  return Number(result.sort((a, b) => b - a).join(''));
}

const res = descendingOrder(123456789);
console.log(res);
