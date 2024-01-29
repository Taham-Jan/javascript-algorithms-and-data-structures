function sumPrimes(n) {
  let sumOfPrimes = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sumOfPrimes = sumOfPrimes + i;
    }
  }
  return sumOfPrimes
}
function isPrime(n) {
  let counter = 2;
  while (counter < n) {
    if (n % counter === 0) {
      return false;
    }
    counter++;
  }
  return true;
}

console.log(sumPrimes(10))