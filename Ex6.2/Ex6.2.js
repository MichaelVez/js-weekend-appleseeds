// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicates(str) {
  let arr = str.toLowerCase().split("");
  let count = {};
  arr.forEach(function (element) {
    count[element] = (count[element] || 0) + 1;
  });
  let max = 0;
  let maxlet = {};
  for (let n in count) {
    if (count[n] > max) {
      max = count[n];
    }
  }
  if (max >= 2) {
    for (let n in count) {
      if (count[n] === max) {
        maxlet[n] = max;
      }
    }
  }
  return maxlet;
}
console.log(duplicates("abcde"));
console.log(duplicates("ABBA"));
console.log(duplicates("indivisibility"));
console.log(duplicates("Indivisibilities"));
console.log(duplicates("aA11"));
