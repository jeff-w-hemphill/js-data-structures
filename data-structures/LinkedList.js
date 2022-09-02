class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(7);
const c = new Node(6);
const d = new Node(8);

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

// Same runtime O(n), but recursive call had O(n) space complexity whereas iterative is a constant space O(1)
const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current != null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}
const sumListRecursive = (head) => {
    if (head == null) return 0;
    return head.val + sumListRecursive(head.next);
}

// Both have constant time but recursive has O(n) space because of call stack. Prefer iterative
const listContains = (head, val) => {
    let current = head;
    while (current != null) {
        if (current.val === val) return true;
        current = current.next;
    }
    return false;
}
const listContainsRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;
    return listContainsRecursive(head.next, target);

}

const getNodeValue = (head, index) => {
    let current = head;
    let i = 0;
    while (current != null) {
        if (index === i) return current.val;
        i++;
        current = current.next
    }
    return null;
}

const getNodeValueRecursive = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeValueRecursive(head.next, --index);
}

const reverseList = (head) => {
    let previous = null;
    let current = head;
    
    while (current != null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}
// printLinkedList(a);
// printLinkedListRecursive(a);
// console.log(LinkedListToArray(a));
// console.log(sumList(a));
// console.log(sumListRecursive(a));
console.log(listContains(a, 7));
console.log(listContainsRecursive(a, 7));
console.log(getNodeValue(a, 9));
console.log(getNodeValueRecursive(a, 4));
console.log(printLinkedList(reverseList(a)));
