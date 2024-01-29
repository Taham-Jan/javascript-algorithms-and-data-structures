function diffArray(arr1, arr2) {
  const newArr = [];
  function arrShift(firstItem, SecondItem) {
    for (let i = 0; i < firstItem.length; i++) {
      if (SecondItem.indexOf(firstItem[i]) === -1) {
        newArr.push(firstItem[i]);
      }
    }
  }
  arrShift(arr1, arr2);
  arrShift(arr2, arr1);
  console.log(newArr);
  return newArr;
}
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
