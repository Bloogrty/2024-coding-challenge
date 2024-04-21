// CODING CHALLENGE 2024
//  15/ 366
// https://www.codewars.com/kata/546e2562b03326a88e000020
// https://chat.openai.com/c/24c3b3d0-f929-400c-b99a-8b048faddd51

const squareDigits = (num) => {
  const numStr = num.toString();
  let combine = "";

  for (let i = 0; i < numStr.length; i++) {
    combine += Math.pow(parseInt(numStr[i]), 2);
  }
  return parseInt(combine);
};

console.log(squareDigits(12));
