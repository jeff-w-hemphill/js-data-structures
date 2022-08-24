class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
};

const printLinkedListRecursive = (head) => {
    if (head === null) return;
    console.log(head.val)
    printLinkedListRecursive(head.next);
};

const LinkedListToArray = (head) => {
    let current = head
    const arr = [];
    while (current != null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// printLinkedList(a);
// printLinkedListRecursive(a);
console.log(LinkedListToArray(a));
