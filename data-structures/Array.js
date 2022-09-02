// Example of inserting into an array at index - O(n) insert time
let a = [1, 2, 3, 4, 5];

let reverse = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = arr[i]
        arr[i] = tmp
    }
}
reverse(a)
console.log(a)