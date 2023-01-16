const table = document.createElement('table');
let count = 1;
let renderTimer = setInterval(() => {
    renderTr(count, table);
    count += 10;
    if(count > 100) clearInterval(renderTimer);
}, 1000);

function renderTr(numberOfField, table) {
    const tr = document.createElement('tr');

    for (let i = 0; i < 10; i++) {
        const td = document.createElement('td');
        td.innerHTML = numberOfField + i;
        tr.append(td);
    }
    table.append(tr);
}

document.body.append(table);