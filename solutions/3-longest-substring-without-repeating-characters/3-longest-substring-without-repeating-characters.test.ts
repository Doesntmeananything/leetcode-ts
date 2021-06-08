import { lengthOfLongestSubstring } from "./3-longest-substring-without-repeating-characters";

describe("lengthOfLongestSubstring returns the length of the longest substring without repeating characters", () => {
  it.each([
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["", 0],
    [" ", 1],
    ["au", 2],
    ["dvdf", 3],
    ["abba", 2],
  ])("for input %s should return %s", (input, expected) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });
});
