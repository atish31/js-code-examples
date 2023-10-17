function* generateArray() {
    yield 'value1';
    yield 'value2';
    yield 'value3';
    return 'value4';
}

let generator = generateArray();
let generator2 = generateArray();

console.log(generator.next(), 'generator');
console.log(generator.next(), 'generator');
console.log(generator.next(), 'generator');
console.log(generator.next(), 'generator');
console.log(generator.next(), 'generator');


for(let value of generator2) {
    console.log(value, 'value');
}
