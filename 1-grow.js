// CODING CHALLENGE 2024
// 1 /366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }

//   return result;
// }

// funtion dec
// function grow(x) {
//   return (result = x.reduce((acc, curr) => acc * curr, 1));
// }

// function expresion
const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([1, 2, 3, 4]));
