function fearNotLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let reqAlphabets = alphabets.slice(alphabets.indexOf(str[0]));
  for (let i = 0; i < reqAlphabets.length; i++) {
    if (str[i] !== reqAlphabets[i]) {
      return reqAlphabets[i];
    }
  }
}

console.log(fearNotLetter("jklmnp"));
