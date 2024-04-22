// CODING CHALLENGE 2024
// 27 / 366
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions/javascript

// MY FIRST WAY
// const powersOfTwo = (n) => {
//   arr = [];
//   for (var i = 0; i <= n; i++) {
//     arr.push(Math.pow(2, i));
//   }

//   return arr;
// };

//  USING MAP

const powersOfTwo = (n) => [...Array(n + 1)].map((_, i) => 2 ** i);

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
