class Queue {
    constructor(data) {
        this.data = [];
    }

    enqueue(entry) {
        this.data.push(entry);
    }

    dequeue() {
        return this.data.shift();
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

