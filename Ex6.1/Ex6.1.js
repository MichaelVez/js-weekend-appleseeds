// This time no story, no theory. The examples below show you how to write function
// accum​:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-zzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.
function accum(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    let index = i + 1;
    for (let j = 0; j < index; j++) {
      if (i === 0) newstr += str[i].toUpperCase();
      else newstr += str[i].toLowerCase();
    }
    if (i !== str.length - 1) newstr += "-";
  }
  return newstr;
}
console.log(accum("abcd"));
