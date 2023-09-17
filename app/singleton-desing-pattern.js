const Singleton = () => {
    let isInstance;
    let object;
    return () => {
        if (!isInstance) {
            object = new Object('This is an object'); 
            isInstance = true;
        }
        return object;
    }
}

let createObject = Singleton();
let object1 = createObject();
let object2 = createObject();

console.log(object1 === object2);