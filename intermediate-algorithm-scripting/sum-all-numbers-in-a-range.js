function sumAll(arr) {
  let result = 0;
  let arrCounter0 = arr[0] < arr[1] ? arr[0] : arr[1];
  let arrCounter1 = arr[1] < arr[0] ? arr[0] + 1 : arr[1] + 1;
  for (let i = arrCounter0; i < arrCounter1; i++) {
    (result += i);
  }
  return result;
}
