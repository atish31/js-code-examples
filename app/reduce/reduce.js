const reducer = (accumulator, value) => {
    accumulator = accumulator * value;
    return accumulator;
}

const array = [1, 2, 3, 4, 5];
let output1 = array.reduce(reducer);
let output2 = array.reduce(reducer, 0);

console.log(output1);
console.log(output2);
