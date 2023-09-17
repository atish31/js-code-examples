//https://learnersbucket.com/examples/interview/localstorage-with-expiry/#:~:text=Set%20the%20expiry%20date%20to,in%20the%20original%20local%20storage.&text=Likewise%2C%20while%20getting%20the%20value,the%20entry%20and%20return%20null.

const setLocalStorage = (key, value, expiry) => {
    const maxAge = Date.now() + expiry;
    let data = {};
    data['_value'] = value;
    data['_expiry'] = maxAge;
    localStorage.setItem(key, JSON.stringify(data));
}

const getLocalStorgae = (key) => {
    let data = JSON.parse(localStorage.getItem(key));
    if(data) {
        const expiry = data['_expiry']; 
        if(Date.now() >= expiry) {
            localStorage.removeItem(key);
            return 'sorry the item is expired';
        } else {
            return data['_value'];
        }
    } else {
        return('the requested key is not found');
    }
}

setLocalStorage('x', 'y', 5000);
console.log(getLocalStorgae('t'));
console.log(getLocalStorgae('x'));
setTimeout(() => {
    console.log(getLocalStorgae('x'));
}, 3000);

setTimeout(() => {
    console.log(getLocalStorgae('x'));
}, 5000);

setTimeout(() => {
    console.log(getLocalStorgae('x'));
}, 6000);

