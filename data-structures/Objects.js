// let obj = {
//     a: 1,
//     b: 2,
//     sumAB: function () {
//         return this.a + this.b;
//     },
//     f: function (x, y) {
//         return x + y;
//     },
//     arrowF: () => console.log('Arrow func') // does not have it's own this
// }

// console.log(obj.f(5,2))
// console.log(obj.sumAB());
// obj.arrowF();

// function myFunction(y1, y2, ...y3) {
//     const [x1, ...[result]] = y3

//     console.log(result)
// }

// const arr = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// myFunction(...arr)

// function* gen1() {
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)
// }

// const iterator = gen1()

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => { resolve('b')}, 50);
//     });
// }

// async function logger() {
//     setTimeout(() => console.log('a'), 10);
//     console.log(await apiCall());
//     console.log('c');
// }

// logger()
// let green;
// grnee = false
// console.log(grnee)

document.body.style.backgroundColor= 'red';
