class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null; // One or both of the lists are empty, no intersection
  }

  let currentA = headA;
  let currentB = headB;

  while (currentA !== currentB) {
    currentA = currentA ? currentA.next : headB;
    currentB = currentB ? currentB.next : headA;
  }

  return currentA; // Either intersection point or null if no intersection
}

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);

const list2 = new ListNode(6);
list2.next = list1.next.next; // Point of intersection

const intersectionNode = getIntersectionNode(list1, list2);

if (intersectionNode) {
  console.log(`Intersection Point Value: ${intersectionNode.value}`);
} else {
  console.log("No intersection point");
}