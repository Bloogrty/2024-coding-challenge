// CODING CHALLENGE 2024
// 6 /366
// https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&xids=completed&beta=false&order_by=popularity%20desc

// functional declaration with for loop
function repeatStr(n, s) {
  str = "";
  for (var i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// functional expression with repeat
// const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(4, "Hi"));
