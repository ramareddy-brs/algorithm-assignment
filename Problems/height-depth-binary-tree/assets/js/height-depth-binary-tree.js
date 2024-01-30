class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findHeight(root) {
  if (root === null) {
    return -1; // Height of an empty tree is -1
  }

  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const height = findHeight(root);
console.log("Height of the binary tree:", height);