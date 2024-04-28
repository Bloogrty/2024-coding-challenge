// CODING CHALLENGE 2024
// 28 / 366
// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9

function riders(stations) {
  if (!stations || stations.length === 0) {
    return "Invalid input.";
  }

  let riders = 1;
  let remaining = 100;

  for (const distance of stations) {
    if (remaining >= distance) {
      remaining -= distance;
    } else {
      riders++;
      remaining = 100 - distance;
    }
  }

  return riders;
}

console.log(riders([18, 15]));
