const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

const mondayTr = renderArrayInTr(monday, amount);
const tuesdayTr = renderArrayInTr(tuesday, amount);

document.write(
    `<table>
        ${mondayTr}
        ${tuesdayTr}
    </table>`
);

function renderArrayInTr(array, amount) {
    const Tr = array.map(function (item) {
        item[1] = item[1] / 60;
        return item;
        })
        .filter(function (item) {
        return item[1] > 2
        })
        .map(function (item) {
            item[2] = item[1] * amount;
            return item;
        })
        .map(function (item) {
            item = `<tr>
                <td>Task name: ${item[0]}</td>
                <td>Task duration: ${item[1]} hours</td>
                <td>Task amount: ${item[2]}$</td>
            </tr>`;
            return item;
        })
        .join('');
    return Tr;
};