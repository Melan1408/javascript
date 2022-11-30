function sum (a, b) {
    return a + b;
}

function main (a = 2, b = 3, c) {
    let sumResult = sum(a, b);
    if (typeof c === 'function') {
        return c(sumResult);
    }
    return sumResult;
}