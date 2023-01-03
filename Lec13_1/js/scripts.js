class DataForCalculation{
    constructor(x, y, sign) {
        this.x = x;
        this.y = y;
        this.sign = sign;
    }
    getInput() {
        do {
            this.x = +prompt('Enter x');
        } while (isNaN(this.x));
        do {
            this.y = +prompt('Enter y');
        } while (isNaN(this.y));
        do {
            this.sign = prompt(`Enter sign: ${this.getOperations()}`);
        } while (!operations[this.sign]);
    }
    getOperations(operations) {
        const signs = [];
        for (let key in operations) {
            signs.push(key);
        }
        return signs.join(', ');
    }
}

class SuperMath {
    constructor(data) {
        this.data = data;
    }
    check() {
        if(confirm(`Do you want to make calculation: ${this.data.x} ${this.data.sign} ${this.data.y}?`))
            return this.calculate();
        else {
            this.data.getInput();
            return this.check();
        }
    }
    calculate() {
       return operations[this.data.sign](this.data.x, this.data.y);
    }
}

operations = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y },
    '%': function (x, y) { return x % y },
}

const data = new DataForCalculation(32, 1, '*');
const calculator = new SuperMath(data);
console.log(calculator.check());