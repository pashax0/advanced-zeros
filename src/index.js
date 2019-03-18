module.exports = function getZerosCount(number, base) {
  let maxBase = base, v = 0, p = 1, n = 1, lastI = 0;
  for (let i = 2; i <= maxBase; i++) {
    if (maxBase % i == 0 && maxBase !== i) {
      if (i == lastI) {
        n++;
      }
      if (i > lastI) {
        n = 1;
      }
      maxBase = maxBase / i;
      lastI = i;
      i = 1;
    } else if (maxBase == i) {
      if (i == lastI) {
        n++;
      }
      if (i > lastI) {
        n = 1;
      }
      break;
    }
  }
  while (p <= number) {
    p *= maxBase;
    v += Math.floor(number / p);
  }
  return Math.floor(v / n);
}