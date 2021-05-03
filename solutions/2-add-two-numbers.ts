import { ListNode } from "../utils/data-types";

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let l1Walker = l1;
  let l2Walker = l2;

  const result = new ListNode(0);
  let resultWalker = result;

  let carry = 0;

  while (carry || l1Walker?.val !== undefined || l2Walker?.val !== undefined) {
    let resultVal = (l1Walker?.val ?? 0) + (l2Walker?.val ?? 0) + carry;

    if (resultVal > 9) {
      carry = 1;
      resultVal %= 10;
    } else {
      carry = 0;
    }

    resultWalker.val = resultVal;

    if (carry || l1Walker?.next || l2Walker?.next) {
      resultWalker.next = new ListNode(0);
      resultWalker = resultWalker.next;
    } else {
      resultWalker.next = null;
    }

    l1Walker = l1Walker?.next ?? null;
    l2Walker = l2Walker?.next ?? null;
  }

  return result;
};
