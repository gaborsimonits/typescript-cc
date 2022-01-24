// compiling tsc to js 
// terminal command: tsc index / tsc filename

// watch a file, start watch mode
// tsc --watch index

let id: number = 5 

console.log('ID:', id )

// setup config file 
// tsc --init

// setup config file
// tsc --init

// changing target in config.json to es6 then run tsc, will change var to let in js file


// __________BASIC TYPES__________
let id2: number = 77
let company: string = 'Evil Corp 077'
let isPublished: boolean = true
let x: any = 'Hello'
// any can be redeclared as another type
x = true

let ids: number[] = [1,23,4,5]
// ids.push('hello') 

let arr: any[] = [1, true, 'hello']

// __________TUPLE__________
let person: [ number, string, boolean ] = [1, 'John', true]

// __________TUPLE ARRAY__________
let employee: [number, string][]

employee = [
    [1, 'Jojo'],
    [2, 'Juju'],
    [3, 'Joe'],
    [4, 'Jay'],
    [5, 'Johnjay'],
]

// __________UNION__________
let anotherId: string | number 
anotherId = 22
anotherId = "Scooby"

// __________ENUM__________
enum Direction1 {
    Up = 1, 
    Down,
    Left,
    Right
}
//by default it's 0,1,2,3,
console.log(Direction1.Left);

enum Direction2 {
    Up = 'Up', 
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Left);

// __________OBJECTS__________
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// __________TYPE ASSERTION__________

let cid: any = 1

// let customerId = <number>cid
let customerId = cid as number

// __________FUNCTIONS__________
// unless disabling noimplicit any, need to give type to params as well as the return value
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2));

// VOID
function log(message: string | number): void{
    console.log(message);
}

// __________INTERFACES__________
interface UserInterface {
    id: number,
    name: string,
    age?: number
    // adding optional properties with ? 
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y 

// __________CLASSES__________

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register() {
        return `${this.name} is registered`
    }
}

const John = new Person(1, 'John Jay')
const Joe = new Person(7, 'Joe Johnson')

// console.log(John, Joe);

// console.log(John.register());

// __________SUBCLASSES__________

class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Paul', 'Developer')

console.log(emp.name);
console.log(emp.register());


// __________GENERICS__________

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(['Joe', 'John', 'Husky'])