const HAMBURGER = {
    "small": {
        price: 5,
        calories: 20
    } ,
    "big": {
        price: 10,
        calories: 40
    } ,
    "cheese": {
        price: 1,
        calories: 20
    } ,
    "salad" : {
        price: 2,
        calories: 5
    } ,
    "potato": {
        price: 1.5,
        calories: 10
    } ,
    "flavoring": {
        price: 1.5,
        calories: 0
    } ,
    "mayonnaise": {
        price: 2,
        calories: 5
    }
}

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    set supplementFirstAdd(value) {
        this.supplementFirst = value;
    }

    set supplementSecondAdd(value) {
        this.supplementSecond = value;
    }

    getPrice() {
        let price = 0;
        for(let key in this){
            price += HAMBURGER[this[key]].price;
        }
        return price;
    }

    getCalories() {
        let calories = 0;
        for(let key in this){
            calories += HAMBURGER[this[key]].calories;
        }
        return calories;
    }
}

const hamburger = new Hamburger("big", "potato");
hamburger.supplementFirstAdd = "mayonnaise";
hamburger.supplementSecondAdd = "flavoring";
console.log(hamburger.getPrice());
console.log(hamburger.getCalories());