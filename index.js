function centuryFromYear(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}
console.log(centuryFromYear(1001));

// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(13));
