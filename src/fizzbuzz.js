export const fizzbuzz = (number) => {
  if (typeof number !== "number")
    throw new Error("parameter provided must be a number");

  if (Number.isNaN(number))
    throw new Error("parameter provided must be a number");

  /* if (number % 5 === 0 && number % 3 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number; */

  const multiples = { 3: "fizz", 5: "buzz" };
  let output = "";

  Object.entries(multiples).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });

  return output === "" ? number : output;

  /* const fizzbuzz = (number) => {
    if (typeof number !== "number")
      throw new Error("parameter provided must be a number");
  
    if (Number.isNaN(number))
      throw new Error("parameter provided must be a number");
  
    if (number % 5 === 0 && number % 3 === 0) return "fizzbuzz";
    if (number % 3 === 0) return "fizz";
    if (number % 5 === 0) return "buzz";
    return number;
  }; */

};
