function toDec(arr) {
  const res = arr.join("");
  return parseInt(res, 2);
}
console.log(toDec([0, 1, 0, 0]));
console.log(toDec([0, 0, 0, 1]));
console.log(toDec([0, 0, 1, 0]));
console.log(toDec([0, 1, 0, 1]));
console.log(toDec([0, 0, 1, 1, 0, 0, 1]));
console.log(toDec([1, 1, 0, 1, 0, 0, 1, 0, 0]));
