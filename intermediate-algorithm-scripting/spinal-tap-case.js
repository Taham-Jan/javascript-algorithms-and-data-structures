function spinalCase(str) {
  let regex = /\s+|_+/g;
  let splitting = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let result = splitting.replace(regex, "-").toLowerCase()
  return result;
}
spinalCase("The_Andy_Griffith_Show");
