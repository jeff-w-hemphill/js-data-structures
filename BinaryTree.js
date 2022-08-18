class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log("The tree:");
console.log("         a");
console.log("        / \\");
console.log("       b   c");
console.log("     /  \\   \\");
console.log("    d    e   f");

//         a
//        / \
//       b   c
//     /  \   \
//    d    e   f

const depthFirstValues = (root) => {
    if (root === null) return [];
    const result = []
    const stack = [ root ]; // push and pop
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        
    }
    return result;
}

// call stack behavior mimics the same as stlye as iterative solution.
const depthFirstValuesRecursive = (root) => {
    if (root === null) return [];
    const leftVals = depthFirstValuesRecursive(root.left);
    const rightVals = depthFirstValuesRecursive(root.right);
    return [ root.val, ...leftVals, ...rightVals ];
}

const breadthFirstValues = (root) => {
    if (root === null) return [];
    const values = [];

    const queue = [ root ];

    while (queue.length > 0) {
       const current = queue.shift();
       values.push(current.val);

       if (current.left !== null) queue.push(current.left);
       if (current.right !== null) queue.push(current.right);
    }
    return values;
}

// not a great intuitive approach for recursive breadth first traversal

const treeIncludes = (root, target) => {
    if (root === null) return false;
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current.val);
        if (current.val === target) return true;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return false;
}

const treeIncludesRecursive = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target);
}

const treeSum = (root) => {
    if (root === null ) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}

const treeSumIter = (root) => {
    if (root === null) return 0;

    let sum = 0
    const queue = [ root ];
    while ( queue.length > 0) {
        const current = queue.shift();
        sum += current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return sum;
}

// dfs approach
const treeMinVal = (root) => {
    const stack = [ root ];
    let smallest = Infinity;

    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return smallest;
}

const treeMinValRecursive = (root) => {
    if (root === null) return Infinity;    
    return Math.min(root.val, treeMinValRecursive(root.left), treeMinValRecursive(root.right)) 
}

const maxPathSum = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
 

console.log(depthFirstValues(a));
console.log(depthFirstValuesRecursive(a));
console.log(breadthFirstValues(a));
console.log(treeIncludes(a, 'e'));
console.log(treeIncludesRecursive(a, 'e'));
console.log(treeSum(a));
console.log(treeSumIter(a));
console.log(treeMinVal(a));
console.log(treeMinValRecursive(a));
console.log(maxPathSum(a));