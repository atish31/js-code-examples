const func = () => {
    let odd = true;
    return () => {
        odd = !odd;
        console.log(odd)
    }
}

const test = func();

test();
test();
test();
test();
test();
test();
test();
test();
