const array = [123, 244, "hello", 13, "cat", 6];

function removeElement(array, item) {
    index = array.indexOf(item);
    if (index >= 0) array.splice(index, 1);
}

removeElement(array,"cat");
console.log(array);




