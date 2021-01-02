export function xo(str: string) {
  return (
    str.toLowerCase().split('x').length == str.toLowerCase().split('o').length
  );
}
