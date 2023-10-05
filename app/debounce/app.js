function getValue(e) {
    const value = document.querySelector('#debounce');
    value.textContent = e.target.value;
    
}

function getDebounceValue(cb, delay) {
    return (e) => {
        setTimeout(() => {
            cb(e);
        }, delay)
    }
    
}

function init() {
    const input = document.querySelector('#input');
    const updateDebounceValue = getDebounceValue;

    input.addEventListener('input', (e) => {
        updateDebounceValue(getValue, 3000)(e);
        
    })

}

init();