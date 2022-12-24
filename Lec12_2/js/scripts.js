let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;

    this.render = function () {
        return `<tr>
                    <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                    <td>${this.type}</td>
                    <td>${this.price} USD</td>
                </tr>`;
    }
}

function createProductRows(category, arrayOfProduct) {
    const productRow = arrayOfProduct
        .map(function (item) {
            return new Product(category, item.type, item.price);
        })
        .map(function (item) {
            return item.render();
        })
        .join('');

    return productRow;
}


document.write(`
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${createProductRows("kitchen", kitchenProducts)}
                ${createProductRows("devices", devicesProducts)}
                ${createProductRows("cosmetics", cosmeticsProducts)}
            </tbody>
        </table>
    `);