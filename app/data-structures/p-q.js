class Queue {
    constructor() {
        this.data = [];
    }
    push(entry, priority) {
        const qElement = {entry, priority};
        let isPush = true;
        for(let i = 0; i < this.data.length; i++) {
            const priority = this.data[i].priority;
            if(qElement.priority > priority) {
                this.data.splice(i, 0, qElement);
                isPush = false;
                break;
            }
        }
        if(isPush) {
            this.data.push(qElement);
        }

    }

    pop() {
        return this.data.shift().entry;
    }
}


const queue = new Queue();
queue.push(1, 2);
queue.push(2, 1);
queue.push(3, 3);
queue.push(4, 5);
queue.push(5, 6);


console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

