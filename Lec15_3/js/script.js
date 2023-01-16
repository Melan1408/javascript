function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const divForImg = document.createElement('div');

const img = document.createElement('img');
img.setAttribute('src', `images/${getRandomIntInclusive(1, 9)}.jpg`);
img.setAttribute('width', '500px')
img.setAttribute('height', '500px')
divForImg.append(img);

document.body.append(divForImg);