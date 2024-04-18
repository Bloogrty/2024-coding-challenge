// CODING CHALLENGE 2024
// 12 / 366
// https://www.codewars.com/kata/514b92a657cdc65150000006
//  https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

const solution = (number) => {
  if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
};

console.log(solution(25));
