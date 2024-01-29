function destroyer(arr,...vals) {
    let result = arr.concat(vals)
    .filter((item) => !vals.includes(item));
    return result;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
