function assignObjects(obj1, obj2) {
    const newObj = obj1;
    for (let key in obj2) {
        newObj[key] = obj2[key];
    }
    return newObj;
};

let newObj = assignObjects({ x: 10, y: 20 }, { z: 30 });
console.log(newObj);

newObj = assignObjects({ x: 10 }, { x: 20, y: 30 });
console.log(newObj);