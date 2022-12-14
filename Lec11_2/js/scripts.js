let obj_1 = {
        a: 10,
        b: 20,
        k: {
            x: 100,
            y: 200,
            p: {
                x: 300,
            }
        }
    },
    obj_2 = {
        c: 30,
        d: 40,
        y: ['cat', 'dog']
    },
    obj_3 = {
        a: 50,
        f: 60,
        ee: function(){
            console.log('here');
        }
    };


const objOfAllObjets = Object.assign(obj_1, obj_2, obj_3);
console.log(objOfAllObjets);

function openObj(obj) {
    const openedObj = {};
    for(let item in obj) {
        if(typeof obj[item] === 'object') {
            const openedObjStageIn = openObj(obj[item]);
            Object.assign(openedObj,openedObjStageIn);
        }
        else {
            openedObj[item] = obj[item];
        }
    }
    return openedObj;
}

openedObj = openObj(objOfAllObjets);
console.log(openedObj);

