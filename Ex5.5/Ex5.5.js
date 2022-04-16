// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

// Patrick Feeney => P.F6.6

function convertName(name) {
  return (
    name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
  );
}
console.log(convertName("michael vez"));
