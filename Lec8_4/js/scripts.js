function findBiggerNumericalArray(firstArray, secondArray) {
    const sumOfFirstArray = sumNumbersFromArray(firstArray);
    const sumOfSecondArray = sumNumbersFromArray(secondArray);

    if (sumOfFirstArray > sumOfSecondArray) return firstArray;
    else if (sumOfSecondArray > sumOfFirstArray) return secondArray;
    else return 'Sum of number in both arrays is same.'
}

function sumNumbersFromArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
    }
    return sum;
}

const firstArray = [1,2,3, 'hello',4,7];
const secondArray = [1,2,3, true, 4, undefined, 6];

console.log(findBiggerNumericalArray(firstArray, secondArray));