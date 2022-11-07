let firstNumber = 0;
let secondNumber = 0;
let stepInLoop = 0;

while(true)
{
    firstNumber = parseInt(prompt("Input first number"));
    secondNumber = parseInt(prompt("Input second number, it must be bigger than first number"));
    stepInLoop = parseInt(prompt("Input step in loop, it must be smaller than second number - first number"));

    if(isNaN(firstNumber)) alert(`First number must have number format, please try again`);
    else if(isNaN(secondNumber)) alert(`Second number must have number format, please try again`);
    else if(firstNumber >= secondNumber) alert(`Second number must be bigger than first number, please try again`);
    else if(isNaN(stepInLoop)) alert(`Step in loop must have number format, please try again`);
    else if(stepInLoop > secondNumber - firstNumber)
        alert(`Step in loop must be smaller than second number - first number, please try again`);
    else break;
}

let factorial = 1;
let factorialSum = 0;

for(i = firstNumber; i <= secondNumber; i += stepInLoop) {
    for (j = 1; j <= i; j++) {
        factorial *= j;
    }
    factorialSum += factorial;
    factorial = 1;
}

alert(`Sum of factorial from ${firstNumber} to ${secondNumber} with step ${stepInLoop} is ${factorialSum}`);