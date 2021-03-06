import { SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function removeElements(
  head: SinglyLinkedListNode<number> | null,
  val: number
): SinglyLinkedListNode<number> | null {
  while (head?.val === val) {
    head = head.next;
  }

  const result = head;

  while (head) {
    let pointer = head.next;

    while (pointer?.val === val) {
      pointer = pointer?.next;
    }

    head.next = pointer;
    head = head.next;
  }

  return result;
}
