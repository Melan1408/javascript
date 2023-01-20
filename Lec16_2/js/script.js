const shape = document.querySelector('.shape');
const color = document.querySelector('input');
const shapeType = document.querySelector('select');

shapeType.addEventListener('change', () => {
    shapeTypeSelector[shapeType.value](shape);
})

color.addEventListener('input', () => {
    shape.style.background = color.value;
})

const shapeTypeSelector = {
    'square': shape => {
        shape.style.borderRadius = '0%';
        shape.style.width = '100px';
    },
    'circle': shape => {
        shape.style.borderRadius = '100%';
        shape.style.width = '100px';
    },
    'rectangle': shape => {
        shape.style.borderRadius = '0%';
        shape.style.width = '150px';
    }
}

