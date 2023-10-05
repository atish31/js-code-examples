function init() {
    let input = document.querySelector('#input');
    let defaultValue = document.querySelector('#defaultValue');
    let throttle = document.querySelector('#throttle');
    
    input.addEventListener('input', e => {
        defaultValue.textContent = e.target.value;
    });
}

init();

const updateText = () => {
    input.addEventListener('input', (e) => {
        console.log(e, '---eeee');
    })
};

const debounce = (cb, delay) => {
    return () => {
        setTimeout = () => {
            cb()
        }, delay};
};

const updateDebounceText = debounce();