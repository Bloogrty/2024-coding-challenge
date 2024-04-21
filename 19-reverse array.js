// CODING CHALLENGE 2024
// 19 / 366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq(5));
