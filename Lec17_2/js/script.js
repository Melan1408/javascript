const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg',
    'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg'];

const img = document.querySelector('img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let number = 0;
leftBtn.style.display = 'none';
img.src = images[number];

leftBtn.addEventListener('click', () => {
    number--;
    changeImg(number, images, leftBtn, rightBtn);
})

rightBtn.addEventListener('click', () => {
    number++;
    changeImg(number, images, leftBtn, rightBtn);
})

function changeImg(number, images, leftBtn, rightBtn) {
    img.src = images[number];
    if(number === 0) leftBtn.style.display = 'none';
    else leftBtn.style.display = 'inline';
    if(number === images.length - 1) rightBtn.style.display = 'none';
    else rightBtn.style.display = 'inline';
}