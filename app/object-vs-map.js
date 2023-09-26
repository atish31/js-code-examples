function initObj() {
    let arr = [{0: 1}, {0: 2}, 2, 3, 4];
    let obj = {};
    obj[arr[0]] = 0;

    for(let i = 1; i < arr.length; i++) {
        let val = obj[arr[i]];
        if(val !== undefined) {
            return true;
        } else {
            obj[arr[i]] = i;
        }
    }

    return false;
}

console.log(initObj());

function initMap() {
    let arr = [{0: 1}, {0: 1}, 2, 3, 4];
    let map = new Map();
    map.set(arr[0], 0);
    for (let i = 1; i < arr.length; i++) {
        let val = map.get(arr[i]);
        console.log(map, 'map');
        console.log(val, 'val');

        if(val !== undefined) {
            return true;
        }
        map.set(arr[i], i);
    }
    return false;
}

console.log(initMap());