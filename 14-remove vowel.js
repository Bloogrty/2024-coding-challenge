// CODING CHALLENGE 2024
// 14 / 366
// https://www.codewars.com/kata/52fba66badcd10859f00097e

const disemvowel = (str) =>
  str
    .split("")
    .filter((c) => !"aiueoAIUEO".includes(c))
    .join("");
var str1 = "kucing";
var str2 = "aning";
var str3 = "jalksdjflaksd asdlkfja sdf ";
var str4 = "lalalalalalala sadjfksjdk";

console.log(disemvowel(str1));
console.log(disemvowel(str2));
console.log(disemvowel(str3));
console.log(disemvowel(str4));

// using regex

const disemvowelRegex = (value) => value.replaceAll(/[aiueo]/gi, "");

console.log(disemvowelRegex(str1));
console.log(disemvowelRegex(str2));
console.log(disemvowelRegex(str3));
console.log(disemvowelRegex(str4));
