//Generate a random hex string:
// https://learnersbucket.com/examples/javascript/javascript-function-to-generate-a-random-hex-string/

const generateRandomSting = (length) => {
    const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const result = [];
    for (let i = 0; i < length; i++) {
        const hexIndex = Math.floor(Math.random() * 16);
        const hexChar = hexNumbers[hexIndex];
        result.push(hexChar);
    }
    return result.join('');

};

console.log(generateRandomSting(6));
console.log(generateRandomSting(12));
console.log(generateRandomSting(3));


