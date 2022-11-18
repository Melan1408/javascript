let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

let winter_sports = sports.slice(0,5);
let summer_sports = sports.slice(5,11);
let fruits = summer_sports.splice(2,2).concat(winter_sports.splice(2,1));
let headers = ["***Winter sports***", "\n***Summer sports***", "\n***Fruits***"];
let resultArray = [winter_sports, summer_sports, fruits];

for(var i = 0; i < headers.length; i++) {
    console.log(`${headers[i]}`);
    for(var j = 0; j < resultArray[i].length; j++) {
    console.log(`${resultArray[i][j].join(":")}`);
    }
}



