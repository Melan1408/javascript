const products = {
    'Laptop': [
        {
            name: 'Laptop 1',
            img: 'images/laptopitem.png',
            price: '100$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Laptop 2',
            img: 'images/laptopitem.png',
            price: '200$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Laptop 3',
            img: 'images/laptopitem.png',
            price: '300$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Laptop 4',
            img: 'images/laptopitem.png',
            price: '400$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        }

    ],
    'Phone': [
        {
            name: 'Phone 1',
            img: 'images/phoneitem.png',
            price: '500$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Phone 2',
            img: 'images/phoneitem.png',
            price: '600$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Phone 3',
            img: 'images/phoneitem.png',
            price: '700$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Phone 4',
            img: 'images/phoneitem.png',
            price: '800$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        }
    ],
    'Tablet': [
        {
            name: 'Tablet 1',
            img: 'images/tabletitem.png',
            price: '1000$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Tablet 2',
            img: 'images/tabletitem.png',
            price: '1100$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Tablet 3',
            img: 'images/tabletitem.png',
            price: '1200$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Tablet 4',
            img: 'images/tabletitem.png',
            price: '1300$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        }
    ],
    'Watch': [
        {
            name: 'Watch 1',
            img: 'images/watchitem.png',
            price: '1500$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Watch 2',
            img: 'images/watchitem.png',
            price: '1600$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Watch 3',
            img: 'images/watchitem.png',
            price: '1700$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        },
        {
            name: 'Watch 4',
            img: 'images/watchitem.png',
            price: '1800$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, facilis minima nobis quidem sapiente tempora. Aliquam animi dignissimos esse ipsa maxime natus nobis officiis sapiente sed, sequi tempora voluptatum?'
        }
    ]
}

const productDiv = document.querySelector('.item');
const categoryDiv = document.querySelector('.category');

function renderCategories(products) {
    const categoriesDiv = document.querySelector('.categories');
    const categoriesUl = document.createElement('ul');

    for(const category in products) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');

        p.innerText = `${category}`;
        a.href = '#';
        img.src = `images/${category}.png`;
        img.logo = `${category}`;

        a.addEventListener('click', () => {
            renderCategory(products, category);
        });

        a.append(img);
        a.append(p);
        li.append(a);
        categoriesUl.append(li);
    }

    categoriesDiv.append(categoriesUl);
}

function renderCategory(products, category) {

    categoryDiv.innerHTML = '';
    productDiv.innerHTML = '';

    products[category].forEach(item => {
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const h = document.createElement('h3');
        const p = document.createElement('p');

        h.innerText = `${item.name}`;
        p.innerText = `${item.price}`;
        a.href = '#';
        img.src = `${item.img}`;
        img.logo = `${item.name}`;

        a.addEventListener('click', () => {
            renderProduct(products, item)
        });

        a.append(img);
        a.append(h);
        a.append(p);
        div.append(a);
        categoryDiv.append(div);
    })
}

function renderProduct(products, product) {

    productDiv.innerHTML = '';

    const img = document.createElement('img');
    const h = document.createElement('h3');
    const p = document.createElement('p');
    const price = document.createElement('p');
    const a = document.createElement('a');

    img.src = `${product.img}`;
    img.logo = `${product.name}`;
    h.innerText = `${product.name}`;
    p.innerText = `${product.description}`;
    price.innerText = `${product.price}`;
    a.innerText = `Buy this nice ${product.name}`;
    a.href = '#';

    a.addEventListener('click', () => {
        alert(`Congratulations you have purchased ${product.name}!`);
        productDiv.innerHTML = '';
        categoryDiv.innerHTML = '';
    });
    productDiv.append(img);
    productDiv.append(h);
    productDiv.append(p);
    productDiv.append(price);
    productDiv.append(a);
}

renderCategories(products);