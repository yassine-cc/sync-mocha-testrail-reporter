describe("E2E Testrail Mocha Reporter", () => {
  it("C1 Test case 1", () => {});
  it("C2 Test case 2 should fail due to timeout", () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("resolving test case 2");
        resolve();
      }, 10000)
    );
  });
  it("C3 Test case 3 should fail", () => {
    throw new Error("Failed test");
  });
});
