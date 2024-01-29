function smallestCommons([val1, val2]) {
  let large;
  let small;
  val1 > val2
    ? ((large = val1), (small = val2))
    : ((large = val2), (small = val1));
  let smallCommonMultiple = large;
  for (let i = small; i <= large; i++) {
    if (smallCommonMultiple % i !== 0) {
      smallCommonMultiple += large;
      i = small - 1;
    } else if (i === large) {
      return smallCommonMultiple;
    }
  }
}

console.log(smallestCommons([1, 5]));
