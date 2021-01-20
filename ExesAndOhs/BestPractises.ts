/* eslint-disable import/prefer-default-export */
export function xoBestPractise(str: string) {
  return (
    str.toLowerCase().split('x').length == str.toLowerCase().split('o').length
  );
}
