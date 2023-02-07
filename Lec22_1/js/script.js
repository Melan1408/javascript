const form = document.querySelector('form');
const API = 'https://jsonplaceholder.typicode.com/posts';
const input = document.querySelector('input');
const divPost = document.querySelector('.post-container');
const divComment = document.querySelector('.comment-container');

function renderComment(comments) {
    divComment.innerText = '';

    comments.forEach(item => {

        const div = document.createElement('div');
        const pName = document.createElement('p');
        const pEmail = document.createElement('p');
        const pBody = document.createElement('p');

        pName.innerText = `Name: ${item.name}`;
        pEmail.innerText = `Email: ${item.email}`;
        pBody.innerText = `Comment: ${item.body}`;

        div.append(pName);
        div.append(pEmail);
        div.append(pBody);
        div.classList.add('comment-div');
        divComment.append(div);
    })
}

function renderPost(post) {
    divPost.innerText = '';
    divComment.innerText = '';
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const pBtn = document.createElement('p');

    h2.innerText = `Title: ${post.title}`;
    p.innerText = post.body;
    pBtn.innerText = 'Get Comment';

    divPost.append(h2);
    divPost.append(p);
    button.append(pBtn);
    divPost.append(button);

    button.addEventListener('click', () => {
        makeRequest(`${API}/${input.value}/comments`).then(data => renderComment(data));
    })
}

function makeRequest(URL) {
    return fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Post not found");
        })
        .catch(error => alert(error))
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    makeRequest(`${API}/${input.value}`).then(data => renderPost(data));
})