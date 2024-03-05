describe("number operation", () => {
  it("check of greater than", () => {
    expect(45).toBeGreaterThan(30);
    expect(30).toBeGreaterThanOrEqual(30);
  });
  it("check of greater than", () => {
    expect(30).toBeLessThan(31);
    expect(30).toBeLessThanOrEqual(30);
  });
});
