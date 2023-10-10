let person = {
    name: 'xyx',
}

function printCars(Car1, Car2, Car3) {
    console.log(`${this.name} has ${Car1}, ${Car2}, ${Car3}`);
}

printCars.call(printCars, 'Car1', 'Car2', 'Car3');
printCars.apply(printCars, ['Car1, Car2, Car3']);