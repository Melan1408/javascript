const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51,
27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveArray = array.filter(function(item) {
    return item > 0;
});

const negativeArray = array.filter(function(item) {
    return item < 0;
});

let sumOfPosElement = 0;

positiveArray.forEach(function (item) {
    sumOfPosElement += item;
});

console.log(`Count of positive elements is ${positiveArray.length} and sum of this elements is ${sumOfPosElement}.`);

let minElementOfArray = 0;
let maxElementOfArray = 0;

array.forEach(function (item) {
    if (item > maxElementOfArray) maxElementOfArray = item;
    if (item < minElementOfArray) minElementOfArray = item;
});

console.log(`Min element of Array is ${minElementOfArray} with index ${array.indexOf(minElementOfArray)}.`);
console.log(`Max element of Array is ${maxElementOfArray} with index ${array.indexOf(maxElementOfArray)}.`);

console.log(`Count of negative elements is ${negativeArray.length}.`);

let countOfNotEvenPosElements = 0;
let sumOfNotEvenPosElements = 0;

let countOfEvenPosElements = 0;
let sumOfEvenPosElements = 0;

positiveArray.forEach(function (item) {
    if (item % 2 !== 0) {
        countOfNotEvenPosElements++;
        sumOfNotEvenPosElements += item;
    }
    else {
        countOfEvenPosElements++;
        sumOfEvenPosElements += item;
    }
});

console.log(`Count of not even positive elements is ${countOfNotEvenPosElements} and their sum is ${sumOfNotEvenPosElements}.`);
console.log(`Count of even positive elements is ${countOfEvenPosElements} and their sum is ${sumOfEvenPosElements}.`);

let mulOfPosElements = 1;

positiveArray.forEach(function (item) {
    mulOfPosElements *= item;
});

console.log(`Mul of positive elements is ${mulOfPosElements}.`);

array.forEach(function (item, index) {
    if (item !== maxElementOfArray) array[index] = 0;
});

console.log(array);