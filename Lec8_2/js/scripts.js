function sum() {
    let counter = 0;
    return function(arg) {
        return counter += arg;
    }
}

const count = sum();
console.log(count(3));
console.log(count(5));
console.log(count(20));
