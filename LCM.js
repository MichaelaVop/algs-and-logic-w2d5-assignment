// find the lowest common multiple of two given numbers

const lcm = function(a, b) {

  // if (a === 0) {
  //   return 0;
  // };

  // if (b === 0) {
  //   return 0;
  // };

  if (a < b) {
    [a, b] = [b, a]
  }
  const gcd = function(c, d) {
    let r;
  while (c % d > 0) {
    r = c % d;
    c = d;
    d = r;

  }
  
  return d;
}

return ((a * b) / gcd(a, b));

}


console.log(lcm(12, 8));
console.log(lcm(25, 20));
console.log(lcm(5, 12));
console.log(lcm(6, 12));
console.log(lcm(12, 0));

