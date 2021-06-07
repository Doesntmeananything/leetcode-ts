import { ListNode } from "../../utils/data-types";
import { addTwoNumbers } from "./2-add-two-numbers";

describe("addTwoNumbers adds digits from two linked lists in reverse order and returns the sum as a linked list", () => {
  it("should return [7,0,8] with lists [2,4,3] and [5,6,4]", () => {
    const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    const result = new ListNode(7, new ListNode(0, new ListNode(8)));

    expect(addTwoNumbers(list1, list2)).toStrictEqual(result);
  });

  it("should return [0] with lists [0] and [0]", () => {
    const list1 = new ListNode(0);
    const list2 = new ListNode(0);

    const result = new ListNode(0);

    expect(addTwoNumbers(list1, list2)).toStrictEqual(result);
  });

  it("should return [8,9,9,9,0,0,0,1] with lists [9,9,9,9,9,9,9] and [9,9,9,9]", () => {
    const list1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    );
    const list2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9)))
    );

    const result = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
          )
        )
      )
    );

    expect(addTwoNumbers(list1, list2)).toStrictEqual(result);
  });
});
