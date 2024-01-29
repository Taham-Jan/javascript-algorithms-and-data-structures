function sumFibs(num) {
  let prevVal = 0;
  let nextVal = 1;
  let fib1 = 0;
  while (nextVal<= num) {
    if (nextVal % 2 !== 0) {
      fib1 += nextVal;
    }
    nextVal += prevVal;
    prevVal = nextVal - prevVal;
  }
  return fib1;
}

console.log(sumFibs(4));
