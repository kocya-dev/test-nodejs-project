import * as sample from "../src/sample";

describe("sample", () => {
  it("add", () => {
    expect(sample.add(1, 2)).toBe(3);
  });
  it("sub", () => {
    expect(sample.sub(1, 2)).toBe(-1);
  });
});
