// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr(str, n) {
  console.log(str.repeat(n));
  return str.repeat(n);
  /*or
  let newstr = ''
  for(let i = 0; i < n; i++){
      newstr.concat('', str)
  }
  return newstr;
  */
}
console.log(repeatStr("happy ", 3));
