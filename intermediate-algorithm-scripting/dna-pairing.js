function pairElement(str) {
  let arr = [];
  let splitter = str.split("");
  for (let i = 0; i < splitter.length; i++) {
    switch (splitter[i]) {
      case "C":
        arr.push(["C", "G"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
    }
  }
  return arr;
}
pairElement("GCG");
