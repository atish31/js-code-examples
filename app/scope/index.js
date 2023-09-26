"use strict";

function individualFunction() {
    const returnValue = 'individual';
    return returnValue;
}

function outerScope() {
    innerScope();
    return 'outerScope';
}
  
function innerScope() {
    return innerMostScope();
}
  
function innerMostScope() {
    const returnVal = 'innerMostScope';
    return returnVal;
}

let global = 'gloabal';
console.log(global);
individualFunction();
outerScope();