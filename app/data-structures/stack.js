class Stack {
    constructor() {
        this.data = [];
    }

    push(entry) {
        this.data.push(entry);
    }

    pop() {
        return this.data.pop();
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



