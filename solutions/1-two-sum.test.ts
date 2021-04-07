import { twoSum } from "./1-two-sum";

describe("twoSum returns indices of the two numbers such that they add up to target", () => {
  it("should return [0, 1] with nums [2,7,11,15] and target 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  it("should return [1, 2] with nums [3, 2, 4] and target 6", () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });

  it("should return [0, 1] with nums [3, 3] and target 6", () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  });
});
