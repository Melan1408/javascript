const emojiArray = ['🤑', '🤠', '🤡', '😡', '🥶', '😚'];

class Emoji{
    constructor(score, picture) {
        this.score = score;
        this.picture = picture;
    }

    render() {
        const container = document.createElement('div');
        const pictureTag = document.createElement('p');
        const scoreTag = document.createElement('p');

        pictureTag.innerText = this.picture;
        scoreTag.innerText = this.score;

        pictureTag.addEventListener('click', () => {
            scoreTag.innerText++;
        })

        container.append(pictureTag);
        container.append(scoreTag);
        document.body.append(container);
    }
}

emojiArray.forEach(item => {
    const emoji = new Emoji(0, item);
    emoji.render();
})