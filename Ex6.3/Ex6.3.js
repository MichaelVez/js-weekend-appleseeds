// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
  let newstr = [...new Set(s1.toLowerCase().concat(s2.toLowerCase()))]
    .sort()
    .join("");
  return newstr;
}
let userInp = ["A", "B", "A", "C", "B"];
let uniqueChars = [...new Set(userInp)].join("");

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
