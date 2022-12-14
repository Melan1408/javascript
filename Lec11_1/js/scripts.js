let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];

Array.prototype.heroesRender = function(path) {
    const tableRender = this
        .map(function(item) {
            return `
                <tr>
                    <td>${item.name}</td>
                    <td>
                        <img src="images/${path}/${item.name.toLowerCase().replaceAll(" ","")}.svg" width="50" height="50">
                    </td>
                </tr>
            `;
        })
        .join("");
    document.write(`
        <table>
            <thead>
			    <tr>
			        <th>Name</th>
			        <th>Icon</th>
			    </tr>
		    </thead>
		    <tbody>
		        ${tableRender}
		    </tbody>
        </table>
    `);
};
marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");