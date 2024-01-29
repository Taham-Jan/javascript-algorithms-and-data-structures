function orbitalPeriod(arr) {
  console.log(arr);
  arr.map((item) => {
    let temp = orbitalForSingle(item.avgAlt);
    delete item.avgAlt;
    item.orbitalPeriod = temp;
  });
  console.log(arr);
  return arr;
}

function orbitalForSingle(avgAlt) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = earthRadius + avgAlt;
  let result = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
  orbitalPeriod = Math.round(result);
  return orbitalPeriod;
}
