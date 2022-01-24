"use strict";
// compiling tsc to js 
// terminal command: tsc index / tsc filename
// watch a file, start watch mode
// tsc --watch index
let id = 5;
console.log('ID:', id);
// setup config file 
// tsc --init
// setup config file
// tsc --init
// changing target in config.json to es6 then run tsc, will change var to let in js file
// __________BASIC TYPES__________
let id2 = 77;
let company = 'Evil Corp 077';
let isPublished = true;
let x = 'Hello';
// any can be redeclared as another type
x = true;
let ids = [1, 23, 4, 5];
// ids.push('hello') 
let arr = [1, true, 'hello'];
// __________TUPLE__________
let person = [1, 'John', true];
// __________TUPLE ARRAY__________
let employee;
employee = [
    [1, 'Jojo'],
    [2, 'Juju'],
    [3, 'Joe'],
    [4, 'Jay'],
    [5, 'Johnjay'],
];
// __________UNION__________
let anotherId;
anotherId = 22;
anotherId = "Scooby";
// __________ENUM__________
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
//by default it's 0,1,2,3,
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
// __________TYPE ASSERTION__________
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// __________FUNCTIONS__________
// unless disabling noimplicit any, need to give type to params as well as the return value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// VOID
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// __________CLASSES__________
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const John = new Person(1, 'John Jay');
const Joe = new Person(7, 'Joe Johnson');
// console.log(John, Joe);
// console.log(John.register());
// __________SUBCLASSES__________
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Paul', 'Developer');
console.log(emp.name);
console.log(emp.register());
// __________GENERICS__________
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['Joe', 'John', 'Husky']);
