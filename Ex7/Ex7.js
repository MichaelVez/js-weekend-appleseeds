// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
// Find Bugs \ Debug Code
// Bug !!!!!
function indPerimeter(length, width) {
  return length * 2 + width * 2;
}
function lindPerimeter(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}
console.log(lindPerimeter([1, 3, 4, 5, 6, 7, 8, 9], 6));
