const API = 'https://63f75f3fe40e087c958d3bcf.mockapi.io';
const heroes = [];

class Hero {
    constructor(id, name, comics, favorite) {
        this.id = id;
        this.name = name;
        this.comics = comics;
        this.favorite = favorite;
    }

    render() {
        const heroesContainer = document.querySelector('.heroes-container');
        const card = document.createElement('div');
        const heroName = document.createElement('p');
        const heroComics = document.createElement('p');
        const heroFavorite = document.createElement('p');
        const btnFavorite = document.createElement('button');
        const imgFavorite = document.createElement('img');
        const divFavorite = document.createElement('div');
        const btnDelete = document.createElement('button');
        const textDelete = document.createElement('p');

        heroName.innerText = `Name: ${this.name}`;
        heroComics.innerText = `Universe: ${this.comics}`;
        heroFavorite.innerText = 'Favorite:';
        imgFavorite.alt = 'like icon';
        textDelete.innerText = 'Delete';

        if(this.favorite === 'true') imgFavorite.src = 'images/favorite.png';
        else imgFavorite.src = 'images/notFavorite.png';

        imgFavorite.classList.add('favorite-img');
        btnFavorite.classList.add('favorite-btn');
        btnDelete.classList.add('delete-btn');
        card.classList.add('heroCard');
        divFavorite.classList.add('div-flex');

        btnFavorite.addEventListener('click', async () => {
            changeFavorite(this.favorite, imgFavorite, this);

            await controller('PUT', `heroes/${this.id}`, {
                name: this.name,
                comics: this.comics,
                favorite: this.favorite
            });
        });

        btnDelete.addEventListener('click', async () => await this.delete(card));

        btnFavorite.append(imgFavorite);
        divFavorite.append(heroFavorite);
        divFavorite.append(btnFavorite);

        card.append(heroName);
        card.append(heroComics);
        card.append(divFavorite);
        btnDelete.append(textDelete);
        card.append(btnDelete);

        heroesContainer.prepend(card);
    }

    async delete(card) {
        await controller('DELETE', `heroes/${this.id}`);
        card.remove();
        const index = heroes.findIndex(hero => hero.name === this.name);
        if (index !== -1) {
            heroes.splice(index, 1);
        }
    }
}

async function controller(method, action, body) {
    const URL = `${API}/${action}`;
    const params = {
        method,
        headers: {
            'Content-Type': "application/json"
        },
    };

    if (body) params.body = JSON.stringify(body);

    try {
        const response = await fetch(URL, params);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUniverses() {
    const universes = await controller('GET', 'universes');
    const selectUniverses = document.querySelector('select');

    universes.forEach(universe => {
        const option = document.createElement('option');
        option.value = universe.name;
        option.innerText = universe.name;

        selectUniverses.append(option);
    })
}

async function getHeroes() {
    const heroesArray = await controller('GET', 'heroes');

    heroesArray.forEach(heroInfo => {
        const hero = new Hero(heroInfo.id, heroInfo.name, heroInfo.comics, heroInfo.favorite);
        hero.render();
        heroes.push(hero);
    })
}

function changeFavorite(favorite, imgFavorite, favoriteParams) {
    if(favorite === 'true') {
        if( favoriteParams.favorite) favoriteParams.favorite = 'false';
        else  btnFavorite.setAttribute('favorite', 'false');
        imgFavorite.src = 'images/notFavorite.png';
    }
    else {
        if( favoriteParams.favorite) favoriteParams.favorite = 'true';
        else  btnFavorite.setAttribute('favorite', 'true');
        imgFavorite.src = 'images/favorite.png';
    }
}

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault();

    const name = document.getElementById('heroName').value;
    const universe = document.getElementById('heroUniverse').value;
    const favorite = document.querySelector('.favorite-btn').getAttribute('favorite');

    const index = heroes.findIndex(hero => hero.name === name);
    if (index === -1) {
        const heroInfo = await controller('POST', 'heroes', {
            name: name,
            comics: universe,
            favorite: favorite
        })

        const hero = new Hero(heroInfo.id, heroInfo.name, heroInfo.comics, heroInfo.favorite);
        hero.render();
        heroes.push(hero);
        document.querySelector('h2').classList.remove('display');
    }
    else document.querySelector('h2').classList.add('display');
})

const btnFavorite = document.querySelector('form .favorite-btn');
btnFavorite.addEventListener('click', async e => {
    const favorite = btnFavorite.getAttribute('favorite');
    const imgFavorite = document.querySelector('.favorite-img');

    changeFavorite(favorite, imgFavorite, btnFavorite);
})

getUniverses();
getHeroes();