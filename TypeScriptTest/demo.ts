
function process(x : {name: number}){
    x.name = "foo";
    var v = x.name+x
    alert(v);
}





function process1a(x : string[]){
   x[0]
}

function process1b(x : () => string){
   x()
}


function process1c(x : {a:number, b:string}){
   x
}


interface Thing {
    a: number;
    b: string;
    c? : boolean;
    foo(s:string) : string;
    foo(n:number):number;
    //foo(s:string, n:number):string;
}


function process2(x : Thing) {
    return x.a;  
}

var n = process2({a: 10, b: "hello"});  //typeinference type flows

//process2({a: 10, b: "hello", c: true});
//process2({a: 10, b: "hello", c: 5});



function makeAccumulator(){
    var sum : any;
    return {
        clear : () => {sum = 0},
        add : (value : any) => {sum += value},
        result : () => sum
    }
}

var acc = makeAccumulator();


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

