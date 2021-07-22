export const longestPalindrome = (s: string): string => {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = lengthFromCenter(s, i, i);
    const len2 = lengthFromCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      if (len % 2 === 0) {
        let mid = len / 2;
        start = i - mid + 1;
        end = i + mid;
      } else {
        let mid = (len - 1) / 2;
        start = i - mid;
        end = i + mid;
      }
    }
  }
  return s.slice(start, end + 1);
};

const lengthFromCenter = (s: string, left: number, right: number): number => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
