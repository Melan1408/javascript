const links = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');

for(let i = 0; i < links.length; i++) {
    addLinkToBtn(buttons[i], links[i]);
}

function addLinkToBtn(button, link) {
    button.addEventListener('click',() => {
        const linkValue = link.value;
        if (linkValue.indexOf('https://') >= 0 || linkValue.indexOf('http://') >= 0) window.open(linkValue);
        else window.open(`https://${linkValue}`);
    });
}