var n: number;
var a;
var s = "Max";

n = 5;
a = 5;
a = "Hello";
//n = "Hello"; //erro, pois n é number
//s = 5; //erro, pois s é string

var growOld = (age: number) =>  {
    return ++age;
}

console.log(growOld(20));

function getAverage(a: number, b: number, c?:number){
    var total = a + b;
    var average = total / 2;
    if (c) {
        total = total + c;
        average = total / 3;
    }  
    return average;
}

console.log(getAverage(3, 5));
console.log(getAverage(3, 5, 7));

function getAverages(...a: number[]):number {
    var average: number = 0;
    var total: number = 0;
    for(var i = 0; i < a.length; i++){
        total += a[i];
    }
    if (a.length > 0){
        average = total/a.length;
    }
    return average;
}

console.log(getAverages(3, 5));
console.log(getAverages(1,2,3,4,5,6,7,8,9,10));

function getTotal(a: string, b:string, c:string): number;
function getTotal(a: number, b:number, c:number): number;
function getTotal(a: number, b:string, c:number): number;

function getTotal(a: any, b: any, c: any): number{
    var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    return total;
}

var result = getTotal(2, 2, 2);
console.log(result);
result = getTotal("3", "3", "3");
console.log(result);
result = getTotal(4, "4", 4);
console.log(result);

interface IStudent {
    id: number;
    name: string;
    onLeave?: boolean;
}

function printStudent(s: IStudent){

}

interface searchFunction {
    (source: string, subString: string): boolean
}

var searchFunctionImpl: searchFunction = function(s, ss){
    return true;
}

class Student {
    private name: string;

    constructor(name: string, age: number) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

class SpecialStudent extends Student {
    constructor (nome: string, age: number){
        super(nome, age);
    }

    print() {
        console.log("estudante especial");
    }
}

var estudante: Student = new Student("João", 23);
estudante.print();
var est_especial: SpecialStudent = new SpecialStudent("Maria", 18);
est_especial.print();
var est_especial2: Student = new SpecialStudent("José", 15);
est_especial2.print();