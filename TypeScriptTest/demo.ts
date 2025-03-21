






interface Thing {
    a: number;
    b: string;
    //foo(s:string):string
}


function process2(x : Thing) {
    return x  
}

var n = process2({a: 10, b: "hello"});




function makeAccumulator(){
    var sum = 0;
    return {
        clear : () => {sum = 0},
        add : (value : number) => {sum += value},
        result : () => sum
    }
}

var acc = makeAccumulator();
acc;



interface Accumulator {
    clear(): void;
    add(value: number): void;
    result(): number;
}

function makeAccumulator1() : Accumulator {
    var sum = 0;
    return {
        clear : function() {sum = 0},
        add : function(value : number) {sum += value},
        result : function() {return sum}
    }
}

var acc1 = makeAccumulator1();
console.log(acc1.result());
acc1.add(5);
console.log(acc1.result());

