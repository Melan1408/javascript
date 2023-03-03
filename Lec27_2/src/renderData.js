export function renderUser(data) {
    const usersContainer = document.querySelector('.users-container');
    data.forEach(user => {
        const { name, age, email, country, company, birthday } = user;

        const card = document.createElement('div');
        const userName = document.createElement('p');
        const userAge = document.createElement('p');
        const userEmail = document.createElement('p');
        const userCountry = document.createElement('p');
        const userCompany = document.createElement('p');
        const userBirthday = document.createElement('p');

        userName.innerText = `Name: ${name}`;
        userAge.innerText = `Age: ${age}`;
        userEmail.innerText = `Email: ${email}`;
        userCountry.innerText = `Country: ${country}`;
        userCompany.innerText = `Company: ${company}`;
        userBirthday.innerText = `Birthday: ${birthday}`;

        card.classList.add('userCard');

        card.append(userName);
        card.append(userAge);
        card.append(userEmail);
        card.append(userCountry);
        card.append(userCompany);
        card.append(userBirthday);

        usersContainer.append(card);
    })
}