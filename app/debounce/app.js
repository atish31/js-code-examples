function getValue(e) {
    const value = document.querySelector('#debounce');
    value.textContent = e.target.value;
    
}

function getDebounceValue(cb, delay) {
    let timeout;
    return (e) => {
        if(timeout) {
            clearInterval(timeout);
        }
       timeout = setTimeout(() => {
            cb(e);
        }, delay);

    }
    
}

function init() {
    const input = document.querySelector('#input');
    const updateDebounceValue = getDebounceValue;
    const updateValue = updateDebounceValue(getValue, 3000);
    input.addEventListener('input', (e) => {
       updateValue(e);
    })

}

init();