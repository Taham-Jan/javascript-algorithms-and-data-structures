function rot13(str) {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = [];
  let regex = /\W+/;
  console.log(str.match(regex));
  for (let i = 0; i < str.length; i++) {
    if (alphabets.includes(str[i])) {
      newStr.push(
        str[i].replace(
          str[i],
          alphabets[(alphabets.indexOf(str[i]) + 13) % alphabets.length]
        )
      );
    } else {
      newStr.push(str[i]);
    }
  }
  console.log(newStr);
  return newStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
