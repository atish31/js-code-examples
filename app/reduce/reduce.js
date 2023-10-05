const reducer = (accumulator, value) => {
    accumulator = accumulator * value;
    return accumulator;
}

const array = [1, 2, 3, 4, 5];
let output1 = array.reduce(reducer);
let output2 = array.reduce(reducer, 0);

console.log(output1, 'output1');
console.log(output2, 'output2');

const arrayReducer = (accumulator, value) => {
    accumulator.push(value);
    return accumulator;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [[], 1, 2, 3, 4, 5];

let output3 = array1.reduce(arrayReducer, []);
let output4 = array2.reduce(arrayReducer);

console.log(output3, 'output3');
console.log(output4, 'output4');


