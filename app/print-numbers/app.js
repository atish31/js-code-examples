const init = () => {
    let i = 1;
    let previousCount = '';
    const view = document.querySelector('#view');
    view.innerHTML = previousCount + i + ' ';

    return () => {
        console.log('here');
        if(i <= 10) {
            console.log(i, 'index');
            view.innerHTML = previousCount + i;
            previousCount = previousCount + ' ' + i + ' ';
            i++;
        } else {
            clearInterval(interval);
        }
    }
};

const upCount = init();
upCount();

const interval = setInterval(upCount, 1000)