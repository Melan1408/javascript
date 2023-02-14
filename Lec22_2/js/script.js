function getMoney(userData) {
    const willCheckBalance = confirm('Посмотреть баланс на карте?');

    return new Promise((resolve, reject) => {
        if(willCheckBalance) resolve(userData);
        else reject(userData);
    });
}

function checkBalance(userData) {
    let typeOfCash;
    do {
        typeOfCash = prompt(`Выберете валюту для отображения счета из ${Object.keys(userData)}`);
    } while (Object.keys(userData).indexOf(typeOfCash)  === -1);

    console.log(`Баланс составляет: ${userData[typeOfCash]} ${typeOfCash}`);
}

function getAvailableCashForUser(userData, bankData) {
    return Object.keys(userData)
        .filter(item => {
            return bankData[item] && bankData[item].max > 0;
        })
}

function getCash(userData, bankData) {
    const availableCashForUser = getAvailableCashForUser(userData, bankData);
    let typeOfCash;

    do {
        typeOfCash = prompt(`Выберете валюту для снятия из банка из ${availableCashForUser}`);
    } while (availableCashForUser.indexOf(typeOfCash) === -1);

    const countOfCash = prompt(`Введите сумму снятия.`);
    if(countOfCash > bankData[typeOfCash].max) console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия:${bankData[typeOfCash].max}`);
    else if(countOfCash < bankData[typeOfCash].min) console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия:${bankData[typeOfCash].min}`);
    else console.log(`Вот Ваши денежки ${countOfCash} ${typeOfCash} ${bankData[typeOfCash].img}.`);
}

    let userData = {
            'USD': 1000,
            'EUR': 900,
            'UAH': 15000,
            'BIF': 20000,
            'AOA': 100
        },
        bankData = {
            'USD': {
                max: 3000,
                min: 100,
                img: '💵'
            },
            'EUR': {
                max: 1000,
                min: 50,
                img: '💶'
            },
            'UAH': {
                max: 0,
                min: 0,
                img: '💴'
            },
            'GBP': {
                max: 10000,
                min: 100,
                img: '💷'
            }
        };

getMoney(userData)
    .then(
        (userData) => checkBalance(userData),
        (userData) => getCash(userData, bankData)
    )
    .then(() => console.log('Спасибо, хорошего дня 😊'));