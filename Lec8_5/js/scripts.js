const list = [12, 4, 8, 'hello', null, 6, 7, true];

let newList = copy(list, mulNumericValue);
console.log(newList);

function mulNumericValue (value) {
    if (typeof value === 'number') return value * 10;
    return value;
}

function copy (list, somefunc) {
    const copyList = [];
    for (let i=0; i < list.length; i++) {
        copyList.push(list[i])
        if (typeof somefunc === 'function') {
            copyList[i] = somefunc(copyList[i]);
        }
    }
    return copyList;
}