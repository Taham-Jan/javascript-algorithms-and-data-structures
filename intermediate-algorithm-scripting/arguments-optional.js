function addTogether() {
    const [num1, num2] = arguments;
    if (typeof num1 === "number") {
      if (typeof num2 === "number") return num1 + num2;
      if (arguments.length === 1) return (num2) => addTogether(num1, num2);
    }
    else if(typeof num1 !== "number" && typeof num2 !== "number")  {
      return undefined
    }
  }
  console.log(addTogether(3));
