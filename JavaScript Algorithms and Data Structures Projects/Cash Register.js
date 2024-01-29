function checkCashRegister(price, cash, cid) {
  let currencyObj = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000,
  };
  let changeRequired = Math.round(cash * 100) - Math.round(price * 100);
  let change = [];
  let status = "";
  let cidSum = 0;
  let filteredCID = cid.filter(item => item[1] !== 0).reverse();
  filteredCID.forEach(e => {
    let curr = e[0];
    let currSum = e[1] * 100;
    let amount = 0;
    cidSum = cidSum + currSum;
    while (changeRequired >= currencyObj[curr] && currSum > 0) {
      amount = amount + currencyObj[curr];
      changeRequired = changeRequired - currencyObj[curr];
      currSum = currSum - currencyObj[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });
  if (changeRequired > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (
    changeRequired == 0 &&
    Math.round(cash * 100) - Math.round(price * 100) == cidSum
  ) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
