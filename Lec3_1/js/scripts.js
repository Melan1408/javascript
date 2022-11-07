let userPoints=0;

userAnswer = prompt(`How many corners does a rectangle have?`);

if (parseInt(userAnswer)===4)
{
    userPoints +=10;
}

userAnswer = prompt(`Is the sun a star or planet?`);

if (  userAnswer.toLowerCase()==="star")
{
    userPoints +=10;
}

userAnswer = prompt(`What year was Kiev founded?`);

if (parseInt(userAnswer)===882)
{
    userPoints +=10;
}

userAnswer = prompt(`What is the largest planet in the solar system`);

if (userAnswer && userAnswer.trim().toLowerCase()==="jupiter")
{
    userPoints +=10;
}

userAnswer = prompt(`Is Beijing capital city of China?`);

if (userAnswer && userAnswer.trim().toLowerCase()==="yes")
{
    userPoints +=10;
}

alert (`You have ${userPoints} points. You answered correctly for ${userPoints/10}/5.`);

