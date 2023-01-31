const convertedData = [];
const actions = ['data.json', 'data2.json'];
let counter = 0;

function getDataJson(method, actions, array, counter) {

    const xml = new XMLHttpRequest();
    xml.open(method, actions[counter]);
    xml.send();

    xml.responseType = 'json';
    xml.onload = () => {
        if (xml.status !== 200) {
            alert(`Ошибка ${xml.status}: ${xml.statusText}`);
            counter++;
        }
        else {
            const response = xml.response.children;
            array.push(response);
            counter++;
        }
        if(counter < actions.length) getDataJson(method, actions, array, counter);
        else console.log(`${array}`);
    };
}

getDataJson('GET', actions, convertedData, counter);