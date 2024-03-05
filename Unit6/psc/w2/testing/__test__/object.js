describe("object operation", () => {
  it("should be a call of object", () => {
    function car() {}
    function fruits() {}
    let a = new car();
    expect(a).toBeinstanceof(fruits);
    expect({}).toBeinstanceof("[object object]");
  });
});
