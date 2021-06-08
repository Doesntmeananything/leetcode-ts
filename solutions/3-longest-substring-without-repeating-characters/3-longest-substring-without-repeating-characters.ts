export const lengthOfLongestSubstring = (s: string): number => {
  let result = 0;
  if (s === "") return result;

  let chars = new Map<string, number>();

  for (let i = 0, j = 0; j < s.length; j++) {
    if (chars.has(s.charAt(j))) {
      i = Math.max(chars.get(s.charAt(j))!, i);
    }

    result = Math.max(result, j - i + 1);
    chars.set(s.charAt(j), j + 1);
  }

  return result;
};
