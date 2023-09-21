const numbers = [1, 2, 3, 4, 5];

const reducer = (accumulator, val) => {
    accumulator.push(val);
    return accumulator;
}

const finalArray = numbers.reduce(reducer, []);
console.log(finalArray, 'finalArray')