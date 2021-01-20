function isValidIP(str: string) {
  return (
    str.split('.').filter((v) => v == Number(v).toString() && Number(v) < 256).length == 4
  );
}
