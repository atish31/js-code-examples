function f1(x) {
    x = x || 5;
    console.log(x, '---f1');
}

function f2(x) {
    x = x !== undefined ? x : 5;
    console.log(x, '---f2');
}

function f3(x = 5) {
    console.log(x, '---f3');
}

function f4(x = 5) {

}

function getUniqueId() {
    return Math.floor(Math.random() * 10);
}

function f5(x = getUniqueId()) {
    console.log(x);
}

f1();
f1(0);
f1(3);

console.log('------------------------------xxxxxxxx----------------------------');

f2();
f2(null);
f2(undefined);
f2(3);
f2.apply(null, []);
f2.apply(null, [,]);
f2.apply(null, [4]);

console.log('------------------------------xxxxxxxx----------------------------');

f3();
f3(null);
f3(undefined);
f3(3);
f3.apply(null, []);
f3.apply(null, [,]);
f3.apply(null, [4]);


