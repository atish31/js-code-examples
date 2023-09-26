//https://learnersbucket.com/interview/dream11-sde2-frontend-interview-experience/

const onlyTwice = (fn) => {
    let oddInstances = true;
    let oddInstance;
    let evenInstance;

    return () => {
        if(oddInstances) {
            if(!oddInstance) {
                oddInstance = fn;
            }
            oddInstances = !oddInstances;
            return oddInstance;
        } else {
            if(!evenInstance) {
                evenInstance = fn;
            }
            oddInstances = !oddInstances;
            return evenInstance;
        }


    }
}

const logNumber = (x) => {
    return x;
}

const getInstance = onlyTwice(logNumber);
const _logNumber = getInstance();
console.log(_logNumber('hey'));
console.log(_logNumber('hey'));
console.log(_logNumber('hey'));
console.log(_logNumber('hey'));
