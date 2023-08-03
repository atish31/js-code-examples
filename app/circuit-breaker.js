const circuitBreaker = (fn, count, threshold) => {
    let failure = 0;
    let timeSinceLastFailure = 0;

    return function(...args) {
        if(failure === count) {
            const diff = Date.now() - timeSinceLastFailure;
            if(diff < threshold) {
                return 'service not available'
            }
        }
        
        try {
            invokeFunction = true; 
            const result = fn(...args);
            failure = 0;
            return(result, 'result')
        }
        catch(error) {
            failure++;
            if(failure === count) {
                timeSinceLastFailure = Date.now();
            }
            return(error, 'error');
        }
        
    }
}

const testFunction = () => {
    let count = 0;
    return function() {
        if(count < 4) {
            count++;
            throw ('error');
        } else {
            count = 0;
            return 'return test function';
        }
    }
}

let t = testFunction();
let exe = circuitBreaker(t, 4, 3000);

console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());
console.log(exe());

setTimeout(() => {
    console.log(exe());
}, 4000);