// Ex 1
let gretter = function (myArray, counter) {
    const greetText = 'Hello ';
    for(let i of myArray){
        console.log(greetText + i);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

// Ex 2
let capitalize = function(myArr){
    [myArr[0], ...rest] = myArr;
    console.log(myArr[0].toUpperCase() + rest.join(''));
}

capitalize('foobar');
capitalize('nodeJs');

// Ex 3
const colors = ['red', 'green', 'blue'];
let capColors = function(myArr) {
    return myArr.map(x => capitalize(x));
}
capColors(colors);

// Ex 4
let values = [1, 60, 34, 30, 20, 5];
let filter = function(arr) {
    return arr.filter(x => x < 20);
}

console.log(filter(values));

// Ex 5
let array = [1, 2, 3, 4];
let calculateSum = function(arr){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer);
}
let calculateProduct = function(arr){
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return arr.reduce(reducer);
}
console.log(calculateSum(array));
console.log(calculateProduct(array));

// Ex 6
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details() {
        return "Model: " + this.model + "\nYear: " + this.year;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info() {
        return this.model + " has a balance of $" + this.balance;
    }
}

const car1 = new Car("Volga", 1967);
const sedan = new Sedan("Volvo", 2018, 30000);
console.log(car1.details());
console.log(sedan.info());
