debugger
let firstNumber = parseFloat(prompt(`Input please first number`));
let secondNumber = parseFloat(prompt(`Input please second number`));
let thirdNumber =  parseFloat(prompt(`Input please third number`));

let arithmeticMean = (firstNumber + secondNumber + thirdNumber)/3;

if(isNaN(arithmeticMean))
{
    alert(`You input numbers was incorrect, please use only numbers.`);
}
else
{
    alert(`The arithmetic mean of this numbers is ${arithmeticMean}`);
}

