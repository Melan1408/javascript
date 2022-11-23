let htmlViewArray = [];
let suitPathArray = ['clubs', 'spades', 'diamonds', 'hearts'];
let personCardPathArray = ['jack', 'queen', 'king'];
let personCardNameArray = ['J', 'Q', 'K', 'T'];

htmlViewArray.push(`<div class="wrapper">`);

for (let i = 2; i <= 10; i++) {
    addNumberCard(htmlViewArray, i, suitPathArray);
}

for (let i = 0; i < 4; i++) {
    addPersonCard(htmlViewArray, personCardNameArray[i], personCardPathArray[i], suitPathArray);
}

function addNumberCard(cardsArray, numberCardName, suitPath) {
    for (let i = 0; i < 4; i++) cardsArray.push(`
        <div class="card">
            <div class="card__info">${numberCardName}
                <img src="images/${suitPath[i]}.svg" alt=${suitPath[i]}>
            </div>
                <div class="card__info">${numberCardName}
            <img src="images/${suitPath[i]}.svg" alt=${suitPath[i]}>
             </div>
        </div>
        `);
}

function addPersonCard(cardsArray, personCardName, personCardPath, suitPath) {
    for (let i = 0; i < 4; i++) {
        if (personCardName === 'T') personCardPath = suitPath[i];
        cardsArray.push(`
		<div class="card card--person">
			<div class="card__info">${personCardName}
			    <img src="images/${suitPath[i]}.svg" alt=${suitPath[i]}>
			</div>
			<img class="person" src="images/${personCardPath}.svg" alt=${suitPath[i]}>
			<div class="card__info">${personCardName}
			    <img src="images/${suitPath[i]}.svg" alt=${suitPath[i]}>
			</div>
		</div>
        `);
    }
}

htmlViewArray.push(`</div>`);

let htmlView = htmlViewArray.join(``);
document.write(htmlView);