// CODING CHALLENGE 2024
// 4 / 366
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// function declaration
// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

//   function expression
const boolToWord = (bool) => (bool ? "Yes" : "No");

console.log(boolToWord());
