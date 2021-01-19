function isValidIP(str: string) {
  return (
    str.split('.').filter(function (v) {
      return v == Number(v).toString() && Number(v) < 256;
    }).length == 4
  );
}
