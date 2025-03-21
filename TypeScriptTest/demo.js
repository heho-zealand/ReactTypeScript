function process2(x) {
    return x;
}
var n = process2({ a: 10, b: "hello" });
function makeAccumulator() {
    var sum = 0;
    return {
        clear: function () { sum = 0; },
        add: function (value) { sum += value; },
        result: function () { return sum; }
    };
}
var acc = makeAccumulator();
acc;
function makeAccumulator1() {
    var sum = 0;
    return {
        clear: function () { sum = 0; },
        add: function (value) { sum += value; },
        result: function () { return sum; }
    };
}
var acc1 = makeAccumulator1();
console.log(acc1.result());
acc1.add(5);
console.log(acc1.result());
