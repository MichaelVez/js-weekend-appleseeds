// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.
function removeFirstAndLast(str) {
  let newstr = str;
  newstr = newstr.slice(1, newstr.length - 1);
  return newstr;
}
console.log(removeFirstAndLast("test"));
console.log(removeFirstAndLast("22te123123st11"));
