import { describe, it, expect } from "vitest";

const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error("From is not a string");
  if (typeof to !== "string") throw new Error("To is not a string");
  
  const isSameLength = from.length !== to.length;
  if (isSameLength) return false;

  // New set deletes the not unique values
  // inside an array or string

  // When you compare these two strings with the new set
  // you'll know if they have unique letters or not
  // if the length of them (size) is the same to the other
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;

  if (!hasSameUniqueLetters) return false;
  return true;
};
describe("canReconfigure", () => {
  /* it("should be a function", () => {
    expect(canConfigure).toBeTypeOf("function");
  }); */

  it("Should throw if first parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });

  /* it("Should throw an specific error message if first parameter is missing", () => {
    expect(() => canConfigure()).toThrow("Must provide a parameter");
  }); */

  it("Should throw if first parameter is not a string", () => {
    expect(() => canReconfigure(2)).toThrow();
  });

  /* it("Should throw if second parameter is missing", () => {
    expect(() => canConfigure("a")).toThrow();
  }); */

  it("Should throw if second parameter is not a string", () => {
    expect(() => canReconfigure("a", 2)).toThrow();
  });

  it("Should return a boolean", () => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean");
  });

  it("Should return false if strings provided have different length", () => {
    expect(canReconfigure("abc", "de")).toBe(false);
  });

  it("should return false if strings provided have different number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });
});
