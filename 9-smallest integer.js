// CODING CHALLENGE 2024
// 9 / 366
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

const findSmallestInt = (x) => {
  let smallest = x[0];

  for (let i of x) {
    if (i < smallest) {
      smallest = i;
    }
  }
  return smallest;
};

console.log(findSmallestInt([123, 12, , 12, 4, 12344, 90, -13, -1]));
