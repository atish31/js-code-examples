let promise = new Promise((resolve, reject) => {
    let result = Math.floor(Math.random()*10);
    let error = new Error(`Number ${result} is less than 5`);
    if(result >= 5) {
        resolve(result);
    }
    reject(error);   
});

promise.finally(() => {
    console.log('we are ready for the result:')
})
.then((result) => {
    if(result >= 7) {
        console.log(`Print the number ${result} `);
    } else {
        let error = new Error(`Number ${result} is less than 7`);
        throw error;
    }
},
(error) => {
    throw error;
})

.catch(error => {
    console.log(`Print the error ${error}`);
})
