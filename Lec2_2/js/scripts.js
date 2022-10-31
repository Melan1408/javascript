userFirstNumber= prompt("Enter first number for math operation").trim();
userSecondNumber= prompt("Enter second number for math operation").trim();

addResult = +userFirstNumber + +userSecondNumber;
subResult = userFirstNumber - userSecondNumber;
divResult = userFirstNumber / userSecondNumber;
mulResult = userFirstNumber * userSecondNumber;

alert(`Result of add operation: ${userFirstNumber} + ${userSecondNumber} = ${addResult}\n
Result of sub operation: ${userFirstNumber} - ${userSecondNumber} = ${subResult}\n
Result of div operation: ${userFirstNumber} / ${userSecondNumber} = ${divResult}\n
Result of mul operation: ${userFirstNumber} * ${userSecondNumber} = ${mulResult}\n`);