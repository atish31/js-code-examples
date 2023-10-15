// A functor is something you can map
// A monad is a functor you can flatmap

// 

// Array
// Tree
// Stream
// Promise

// Arrays are functors

// bacon.js
// bus stream in bacon

const makeString = (value) => value.toString();

let array = [1, 2, 3, 4, 5];
const newArray = array.map(makeString);
console.log(array, 'array');

console.log(newArray, 'array');

let tree = {
    'value': 'javascript',
    nodes: [
        {
            value: 'react',
            nodes: [
                {
                    value: 'hooks',
                }, {
                    value: 'rtk',
                },
            ]
        },
        {
            value: 'angular',
            nodes: [
                {
                    value: 'universal',
                }, {
                    value: 'ngrx'
                }
            ]
        },
    ]
        
}

console.log(tree, '!!!tree');
