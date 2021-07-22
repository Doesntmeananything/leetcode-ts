import { longestPalindrome } from "./5-longest-palindromic-substring";

describe.each([
  ["babad", "aba"],
  ["cbbd", "bb"],
  ["a", "a"],
  ["ac", "c"],
  ["abbcccbbbcaaccbababcbcabca", "cbababc"],
])('longestPalindrome("%s")', (input, expected) => {
  test(`returns "${expected}"`, () => {
    expect(longestPalindrome(input)).toBe(expected);
  });
});
