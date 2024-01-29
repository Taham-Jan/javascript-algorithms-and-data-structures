const obj = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
function convertToRoman(num, obj) {
  const numberList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let temp = 0;
  let romanNum = [];
  if (obj?.hasOwnProperty(num)) {
    romanNum.push(obj[num]);
  } else {
    for (let i = 0; i <= numberList?.length; i++) {
      if (num === 0) {
        break;
      } else {
        temp = numberList.filter((item) => item <= num);
        romanNum.push(obj[temp.slice(-1)]);
        num = num - temp.slice(-1);
        console.log(num);
      }
    }
  }
  return romanNum.join("");
}

//////////////////////////////////////////METHOD 222
function convertToRoman2(num, obj) {
  let romanNum = "";
  let numberList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let value of numberList && numberList) {
    while (num >= value) {
      romanNum += obj[value];
      num -= value;
    }
  }

  return romanNum;
}

const result = convertToRoman(12, obj);
const result2 = convertToRoman2(12, obj);
console.log(result);
console.log(result2);
