const array = [1, 2, 3, [1, 2, 3, [1, 2], 4], 4];
let count = 0;

function generateList(array, count) {
    const ul = document.createElement('ul');

    array.forEach(item => {
        const li = document.createElement("li");
        if (Array.isArray(item)) {
            count++;
            li.append(generateList(item, count));
            count--;
        }
        else li.innerText = count > 0 ? `${count}.${item}`: item;
        ul.append(li);
    })

    return ul;
}

document.body.append(generateList(array, count));