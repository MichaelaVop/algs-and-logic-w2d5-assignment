// find the greatest common divisor of the two numbers given
const gcd = function(a, b) {

//f A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
// If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.

  if (a === 0) {
    return b;
  };

  if (b === 0) {
    return a;
  };

  let r;
  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  };

  return b;
}


console.log(gcd(12, 8));
console.log(gcd(25, 20));
console.log(gcd(5, 12));
console.log(gcd(6, 12));
console.log(gcd(12, 0));



