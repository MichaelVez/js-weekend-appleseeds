/*  Create a function that returns the sum of the two lowest positive numbers given an array of 
minimum 4 positive integers. No floats or non-positive integers will be passed. 
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
[10, 343445353, 3453445, 3453545353453] should return 3453455.*/
function twoLowestNumSum(array) {
  let a = array[0];
  let b = array[1];
  for (let i = 0; i < array.length; i++) {
    a = Math.min(a, array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    if (Math.min(b, array[i]) !== a) b = Math.min(b, array[i]);
  }
  return a + b;
}
console.log(twoLowestNumSum([19, 5, 42, 2, 77]));
console.log(twoLowestNumSum([10, 343445353, 3453445, 3453545353453]));
