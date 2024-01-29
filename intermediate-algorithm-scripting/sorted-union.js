function uniteUnique(arr,...arr1) {
  let newArr = [];
  let concatedArr = arr.concat(...arr1);
  for (let i = 0; i < concatedArr.length; i++) {
    if(!newArr.includes(concatedArr[i])){
        newArr.push(concatedArr[i]);
    }
  }
  return newArr;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
