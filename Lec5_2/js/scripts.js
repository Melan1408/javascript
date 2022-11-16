let timeOfYear = "";
let productCategory = "";
let product = "";
let countOfProduct = 0;
let costOfProduct = 0;
let sale = 0;
let fruitsImgPath = ["images/fruits/grapes.svg \"alt=\"grapes\" width=\"100\" height=\"100\"",
    "images/fruits/raspberry.svg \"alt=\"raspberry\" width=\"100\" height=\"100\"",
    "images/fruits/coconut.svg \"alt=\"coconut\" width=\"100\" height=\"100\""];
let vegetablesImgPath = ["images/vegetables/cabbage.svg \"alt=\"cabbage\" width=\"100\" height=\"100\"",
    "images/vegetables/avocado.svg \"alt=\"avocado\" width=\"100\" height=\"100\"",
    "images/vegetables/tomato.svg \"alt=\"tomato\" width=\"100\" height=\"100\""];

while (!(timeOfYear && (timeOfYear.toLowerCase().split(" ").join("") === 'winter'
    || timeOfYear.toLowerCase().split(" ").join("") === 'summer'))) {
    timeOfYear = prompt("Input winter or summer time of year is now.");
    if (!(timeOfYear && (timeOfYear.toLowerCase().split(" ").join("") === 'winter'
        || timeOfYear.toLowerCase().split(" ").join("") === 'summer')))
        alert(`Please input only one time of year, try again please!`);
    else if (timeOfYear === `winter`) {
        sale = 2;
    }
    else {
        sale = 0.8;
    }
}

while (!(productCategory && (productCategory.toLowerCase().split(" ").join("") === 'vegetables'
    || productCategory.toLowerCase().split(" ").join("") === 'fruits'))) {
    productCategory = prompt("Input product category for selected product - vegetables or fruits.");
    if (!(productCategory && (productCategory.toLowerCase().split(" ").join("") === 'vegetables'
        || productCategory.toLowerCase().split(" ").join("") === 'fruits')))
        alert(`Please input only one product category, try again please!`);
}

if (productCategory === 'vegetables') {
    var vegetablesArray = ['cabbage', 'avocado', 'tomato'];
    while (!(product && (product.toLowerCase().split(" ").join("") === vegetablesArray[0]
        || product.toLowerCase().split(" ").join("") === vegetablesArray[1]
        || product.toLowerCase().split(" ").join("") === vegetablesArray[2]))) {
        product = prompt(`Input product name  - ${vegetablesArray}`);
        if (!(product && (product.toLowerCase().split(" ").join("") === vegetablesArray[0]
            || product.toLowerCase().split(" ").join("") === vegetablesArray[1]
            || product.toLowerCase().split(" ").join("") === vegetablesArray[2])))
            alert(`Please input only one product name, try again please!`);
    }
    while (!(countOfProduct && !isNaN(countOfProduct) && countOfProduct > 0)) {
        countOfProduct = parseInt(prompt("Input count of product do u want, more than 0 please."));
        if (!(countOfProduct && !isNaN(countOfProduct) && countOfProduct > 0))
            alert(`Please input count of product as numeric format and more than 0, try again please!`);
    }

    var vegetablesIndex = vegetablesArray.indexOf(product);
    var priceVegetablesArray = [8, 30, 10];

    costOfProduct = sale * priceVegetablesArray[vegetablesIndex] * countOfProduct;
    document.write(`
    <div class="product" align="center">
        <img src= ${vegetablesImgPath[vegetablesIndex]}>
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${timeOfYear}</b></p>
        <p>Selected category: <b>${productCategory}</b></p>
        <p>Final sum: <b>${costOfProduct} UAH</b></p>
    </div>`);
}
else {
    var fruitsArray = ['grapes', 'raspberry', 'coconut'];
    while (!(product && (product.toLowerCase().split(" ").join("") === fruitsArray[0]
        || product.toLowerCase().split(" ").join("") === fruitsArray[1]
        || product.toLowerCase().split(" ").join("") === fruitsArray[2]))) {
        product = prompt(`Input product name  - ${fruitsArray}`);
        if (!(product && (product.toLowerCase().split(" ").join("") === fruitsArray[0]
            || product.toLowerCase().split(" ").join("") === fruitsArray[1]
            || product.toLowerCase().split(" ").join("") === fruitsArray[2])))
            alert(`Please input only one product name, try again please!`);
    }
    while (!(countOfProduct && !isNaN(countOfProduct) && countOfProduct > 0)) {
        countOfProduct = parseInt(prompt("Input count of product do u want, more than 0 please."));
        if (!(countOfProduct && !isNaN(countOfProduct) && countOfProduct > 0))
            alert(`Please input count of product as numeric format and more than 0, try again please!`);
    }
    var fruitsIndex = fruitsArray.indexOf(product);
    var priceFruitsArray = [20, 25, 50];

    costOfProduct = sale * priceFruitsArray[fruitsIndex] * countOfProduct;
    document.write(`
    <div class="product" align="center">
        <img src= ${fruitsImgPath[fruitsIndex]}>
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${timeOfYear}</b></p>
        <p>Selected category: <b>${productCategory}</b></p>
        <p>Final sum: <b>${costOfProduct} UAH</b></p>
   </div>`);
}