function Human(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function() {
        console.log(`Name is ${this.name} and age is ${this.age}.`);
    }
}

function Car(mark, model, yearOfProduct, numberSign) {
    this.mark = mark;
    this.model = model;
    this.yearOfProduct = yearOfProduct;
    this.numberSign = numberSign;

    this.getOwner = function(owner) {
        if(owner.age > 18)  this.owner = owner;
        else console.log("Owner age must be more than 18 year.");
    }

    this.getInfo = function() {
        console.log(`${this.mark} ${this.model} with year of product ${this.yearOfProduct} and number sign ${this.numberSign}.`);
        if (this.owner !== undefined)  this.owner.getInfo();
        else console.log ("There is no owner of car.");
    }
}

const personFirst = new Human("Andrey", 27);
const personSecond = new Human("Ivan", 17);

const carFirst = new Car("Mazda", "6", 2014, "AE0912AO");
const carSecond = new Car("Nissan", "Sentra", 2007, "АН2413КЕ");

carFirst.getOwner(personFirst);
carSecond.getOwner(personSecond);

carFirst.getInfo();
carSecond.getInfo();