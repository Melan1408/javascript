let signOfOperation = "";

while(true) {

    signOfOperation = prompt("Input one math sign like +, -, *, / for calculation");

    if (signOfOperation &&
        (signOfOperation.trim() === '+' ||
            signOfOperation.trim() === '-' ||
            signOfOperation.trim() === '*' ||
            signOfOperation === '/')) break;
    else {
        alert(`You must use only one math sign,please try again`);
        continue;
    }
}

let countOfOperands = 0;

while(true) {

    countOfOperands = parseInt(prompt("Input count of operands for calculation, it must be >1 and <7."));

    if(isNaN(countOfOperands)) {
        alert(`Count of operands must have number format, please try again`);
        continue;
    }
    else if(countOfOperands <= 1) {
        alert(`Count of operands must be more than 1, please try again`);
        continue;
    }
    else if(countOfOperands >= 7) {
        alert(`Count of operands must be less than 7, please try again`);
        continue;
    }
    else break;
}

let operand = 0;
let calculationResult = 0;

while(countOfOperands > 0) {

    operand = parseInt(prompt("Input operand for calculation, it must a number"));

    if(isNaN(operand)) {
        alert(`Operand must have number format, please try again`);
        continue;
    }
    else if(calculationResult === 0) {
        calculationResult = operand;
        countOfOperands--;
    }
    else {
       switch (signOfOperation) {
           case '+':
               calculationResult += operand;
               countOfOperands--;
               break;
           case '-':
               calculationResult -= operand;
               countOfOperands--;
               break;
           case '*':
               calculationResult *= operand;
               countOfOperands--;
               break;
           case '/':
               calculationResult /= operand;
               countOfOperands--;
               break;
       }
    }
}

alert(`Calculation result is ${calculationResult}`);

