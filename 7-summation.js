// CODING CHALLENGE 2024
// 7 / 366
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// functional declaration with loop
// function summation (sum){
//     let total = 0
//     for(var i = sum; i > 0; i--){
//         total += i
//     }
//     return total
// }

// functional expressiion
const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(5));
console.log(summation(2));
console.log(summation(10));
