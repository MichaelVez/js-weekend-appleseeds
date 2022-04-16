// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"

// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
function toWeirdCase(str) {
  let arr = str.split("");
  count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === " ") count = 0;
    if (arr[i] !== " ") {
      if (count % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
      } else {
        arr[i] = arr[i].toLowerCase();
      }
      count++;
    }
  }
  return arr.join("");
}
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
