// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function short(word) {
  let arr = word.split(" ");
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < arr[index].length) {
      index = i;
    }
  }
  return arr[index].length;
}
console.log(short("Shortest word that one"));
