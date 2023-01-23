class Person{
    constructor(name, surname, dateOfBirth, gender, city, address, language) {
        this.name = name;
        this.surname = surname;
        this.dateofBirth = dateOfBirth;
        this.gender = gender;
        this.city = city;
        this.address = address;
        this.language = language;
    }

    viewInfo() {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        for (let i = 0; i < 2; i++) {
            const tr = document.createElement('tr');
            for (const key in this) {
                if (i === 0) {
                    const th = document.createElement('th');
                    th.innerText = key;
                    tr.append(th);
                }
                else {
                    const td = document.createElement('td');
                    td.innerText = this[key];
                    tr.append(td);
                }
            }
            tbody.append(tr);
        }
        table.append(tbody);
        const container = document.querySelector('div');
        container.append(table);
    }
}

function signUp() {

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').id;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(item => { return item.id });

    const person = new Person(name, surname, birthday, gender, city, address, languages);

    document.querySelector('form').remove();
    person.viewInfo();
}

document.querySelector('form').addEventListener("submit", signUp);