// CODING CHALLENGE 2024
// 22 / 366
// https://www.codewars.com/kata/5861d28f124b35723e00005e
// https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump <= mpg * fuelLeft;

console.log(zeroFuel(50, 25, 2));
