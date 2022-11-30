const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);

function generateKey(length, characters) {
    const randomStringArray = [];
    for (let i = 0; i < length; i++) {
        randomStringArray.push(characters[getRandomIndexFromStr(characters.length)]);
    }
    return randomStringArray.join('');
}

function getRandomIndexFromStr(strLength) {
    return Math.floor(Math.random() * strLength);
}