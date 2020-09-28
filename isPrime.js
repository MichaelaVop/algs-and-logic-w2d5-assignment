// check if a given number is prime. return true or false. 

const isPrime = function(num) {

  if (num < 2) {
    return 'false';
  } ;

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return 'false';
    }
  }
  
  return 'true';
  
  // your code here
}

console.log(isPrime(5));
console.log(isPrime(36));
console.log(isPrime(47));
console.log(isPrime(121));
console.log(isPrime(897));




