// CODING CHALLENGE 2024
// 23 / 366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/solutions/javascript

// THIS ONE START FROM X THEN +1 AND LAST IN N
// const countBy = (x, n) => {
//   let z = [];
//   for (var i = x; i <= n; i++) {
//     z.push(i);
//   }
//   return z;
// };

// CARA BRUTAL
// const countBy = (x, n) => {
//   let z = [];
//   let temp = 0;
//   for (let i = 0; i < n; i++) {
//     temp += x;
//     z.push(temp);
//   }
//   return z;
// };

// CARA SINGKAT
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(1, 10));
console.log(countBy(2, 5));
