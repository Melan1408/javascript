let arrayLength = 0;
let numberArray = [];

while (!(arrayLength && !isNaN(arrayLength))) {
    arrayLength = parseInt(prompt(`Input length of array`));
    if (!(arrayLength && !isNaN(arrayLength)))
        alert(`Length of array must have number format, please try again`);
}

for (var i = 0; i < arrayLength; i++) {
    while (!(numberArray[i] && !isNaN(numberArray[i]))) {
        numberArray[i] = parseInt(prompt(`Input ${i+1} number of array`));
        if (!(numberArray[i] && !isNaN(numberArray[i])))
            alert(`${i+1} number of array must have number format, please try again`);
    }
}

alert(`Your array is ${numberArray}`);

for (var i = 0, endI = numberArray.length - 1; i < endI; i++) {
    var wasSwap = false;
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
        if (numberArray[j] > numberArray[j + 1]) {
            var swap = numberArray[j];
            numberArray[j] = numberArray[j + 1];
            numberArray[j + 1] = swap;
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
}

alert(`Your array after sort is ${numberArray}`);

numberArray.splice(2,3);

alert(`Your array after sort and delete elements is ${numberArray}`);