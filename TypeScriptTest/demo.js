"use strict";
function process(x) {
    x.name = "foo";
    var v = x.name + x;
    alert(v);
}
function process1a(x) {
    x[0];
}
function process1b(x) {
    x();
}
function process1c(x) {
    x;
}
function process2(x) {
    return x.a;
}
var n = process2({ a: 10, b: "hello" }); //typeinference type flows
//process2({a: 10, b: "hello", c: true});
//process2({a: 10, b: "hello", c: 5});
function makeAccumulator() {
    var sum;
    return {
        clear: () => { sum = 0; },
        add: (value) => { sum += value; },
        result: () => sum
    };
}
var acc = makeAccumulator();
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
