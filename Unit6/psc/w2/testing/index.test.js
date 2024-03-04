const { sum, mul, sub, div } = require("./index");

describe("sum method", () => {
  test("checking sum", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("checking sum", () => {
    expect(sum(10, 1)).toBe(11);
  });
  test("checking sum", () => {
    expect(sum(7, 1)).toBe(8);
  });
});

describe("sub method", () => {
  test("checking sum", () => {
    expect(sub(8, 1)).toBe(7);
  });
  test("checking sum", () => {
    expect(sub(10, 1)).toBe(9);
  });
  test("checking sum", () => {
    expect(sub(7, 1)).toBe(6);
  });
});


describe("mul method", () => {
  test("checking sum", () => {
    expect(mul(1, 1)).toBe(1);
  });
  test("checking sum", () => {
    expect(mul(10, 1)).toBe(10);
  });
  test("checking sum", () => {
    expect(mul(7, 1)).toBe(7);
  });
});


describe("div method", () => {
  test("checking sum", () => {
    expect(div(1, 1)).toBe(1);
  });
  test("checking sum", () => {
    expect(div(10, 1)).toBe(10);
  });
  test("checking sum", () => {
    expect(div(7, 1)).toBe(7);
  });
});
