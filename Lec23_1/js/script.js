const API = `https://api.github.com/users`
const form = document.querySelector('form');
const divUser = document.querySelector('.user-container');
const input = document.querySelector('input');

async function controller(API) {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

function renderUser(data, div) {
    div.innerText = '';

    const avatar = document.createElement('img');
    const pRepCount = document.createElement('p');
    const pFollowerCount = document.createElement('p');
    const pFollowingCount = document.createElement('p');

    pRepCount.innerText = `Количество репозиториев: ${data.public_repos}`;
    pFollowerCount.innerText = ` Количество фоловеров: ${data.followers}`;
    pFollowingCount.innerText = `Количество наблюдаемых: ${data.following}`;

    avatar.src = `${data.avatar_url}`;
    avatar.style.width = '300px';
    avatar.style.height = '200px';

    div.append(avatar);
    div.append(pRepCount);
    div.append(pFollowerCount);
    div.append(pFollowingCount);
}

function renderError(div) {
    div.innerText = '';

    const errorImg = document.createElement('img');

    errorImg.src = 'images/404.jpg';
    errorImg.style.width = '300px';
    errorImg.style.height = '200px';

    div.append(errorImg);
}

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    try {
        const data = await controller(`${API}/${input.value}`);
        if(data.message === 'Not Found') renderError(divUser);
        else  renderUser(data, divUser);
    }
    catch(error) {
        console.log(error);
    }
})