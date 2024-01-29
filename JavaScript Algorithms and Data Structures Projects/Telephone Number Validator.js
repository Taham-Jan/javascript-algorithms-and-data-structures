function telephoneCheck(str) {
  // let regex = /^1+[0-9\s][\-\s\()]{11}|^[0-9][\-\s\()]{10}/gi; 
  // let regex = /^(1\s?)?(\d{3})[\s\-\()]?(\d{3})[\s\-\()]?(\d{4}$)/
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  let result = regex.test(str);
  return result;
}

let r = telephoneCheck("1 555 555 5555") //true
let r2 = telephoneCheck("5555555555") //true
let r3 = telephoneCheck("1(555)555-5555") //true
console.log(r)
console.log(r2)
console.log(r3)
