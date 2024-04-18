// CODING CHALLENGE 2024
// 13 / 366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// wasy way
const getCount = (str) => {
  const vowels = ["a", "i", "u", "e", "o"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(getCount("ullallalaa"));

// HARDER WAY

const countVowel = (str) =>
  str.split("").filter((c) => "aiueoAIUEO".includes(c)).length;

let sentence1 = "kucing";
console.log(countVowel(sentence1));
