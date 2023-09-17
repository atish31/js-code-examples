//https://learnersbucket.com/examples/interview/localstorage-with-expiry/#:~:text=Set%20the%20expiry%20date%20to,in%20the%20original%20local%20storage.&text=Likewise%2C%20while%20getting%20the%20value,the%20entry%20and%20return%20null.

const setLocalStorage = () => {
    return (key, val) => {
        const storeTime = Date.now();
        let value = [];
        value.push(val);
        value.push(storeTime);
        localStorage.setItem(key, value);
    }
}

const getLocalStorgae = () => {
    return (key, expiry) => {
        let value = localStorage.getItem(key);
        if(value) {
            value = value.split(',')
            const storedTime = value[1]; 
            if((Date.now() - storedTime) >= expiry) {
                localStorage.removeItem(key);
                return 'sorry the item is expired';
            } else {
                return localStorage.getItem(key)[0];
            }
        }
        
    }
}

const setStorage = setLocalStorage();
setStorage('x', 'y');
const getStorage = getLocalStorgae();
const getValue = getStorage;
// alert(getValue);
console.log(getValue('x', '2000'));
setTimeout(() => {
    console.log(getValue('x', '2000'));
}, 3000);
