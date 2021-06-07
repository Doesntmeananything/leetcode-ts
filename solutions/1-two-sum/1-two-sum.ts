export const twoSum = (
  nums: number[],
  target: number
): number[] | undefined => {
  const numsToIndices: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const pairNum = target - nums[i];

    if (numsToIndices[pairNum] !== undefined) {
      return [numsToIndices[pairNum], i];
    } else {
      numsToIndices[nums[i]] = i;
    }
  }
};
