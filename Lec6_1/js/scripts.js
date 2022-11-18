let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = [].concat(destination, native, hero);
rainbow.reverse();
rainbow.shift();
rainbow.unshift('Richard');
rainbow.pop();
rainbow.push('Vain');
let rainbowEndPart = rainbow.splice(3,2);
rainbow.push('Gave', 'Battle');
rainbow = rainbow.concat(rainbowEndPart);

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let htmlWriteArray = [];

htmlWriteArray.push(`<div class="div-flex">`);

for(var i = 0; i < colors.length; i++) {
    htmlWriteArray.push(`
        <div>
            <div class="circle" style="background-color:${colors[i]};"></div>
            <p>${rainbow[i]}</p>
        </div>
    `);
}

htmlWriteArray.push(`</div>`);
let htmlWriteString = htmlWriteArray.join('');

document.write(`${htmlWriteString}`);



