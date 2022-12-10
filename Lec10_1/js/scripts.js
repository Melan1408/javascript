const obj = {
    x: 10,
    y: 20,
    inner: { x: 20, z: 30},
    foo2: { k: 23, p: 13}
};

function  convertObj (obj) {
    const copyObj = {};
    for (let key in obj) {
        if (typeof (obj[key]) === 'object') {
            for (let secondKey in obj[key]) {
                copyObj[secondKey] = obj[key][secondKey];
            }
        } else {
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
};

const copyObj = convertObj(obj);
console.log(copyObj);