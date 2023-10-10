function init() {
    const input = document.querySelector('#input');
    const updateThrottleValue = throttleValue;
    const updateValue = updateThrottleValue(getValue, 4000);
    input.addEventListener('input', (e) => {
        console.log(e, 'event');
        updateValue(e);
    });
}

function getValue(e) {
    const throttleValue = document.querySelector('#throttle');
    throttleValue.textContent = e.target.value;
}

const throttleValue = (cb, delay) => {
    let executeCb = true;
    return (e) => {
        if(executeCb) {
            cb(e);
            executeCb = false;
        }
        setTimeout(() => {
            executeCb = true;
        }, delay);
    }
};
init();