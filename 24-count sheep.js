// CODING CHALLENGE 2024
// 24 / 366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript

// CARA BAR BAR
// const countSheep = (num) => {
//   const str = " sheep...";
//   let strMix = "";

//   for (let i = 1; i <= num; i++) {
//     strMix += i + str;
//   }
//   return strMix;
// };

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} ...sheep`).join("");

console.log(countSheep(3));
