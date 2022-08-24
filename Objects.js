let obj = {
    a: 1,
    b: 2,
    sumAB: function () {
        return this.a + this.b;
    },
    f: function (x, y) {
        return x + y;
    },
    arrowF: () => console.log('Arrow func') // does not have it's own this
}

console.log(obj.f(5,2))
console.log(obj.sumAB());
obj.arrowF();