class BrowserHistory {
    constructor() {
        this.urls = [];
        this.index = -1;
    }

    visit(url) {
        this.urls.push(url);
        this.index = this.urls.length - 1;
    }

    current() {
        const len = this.urls.length;
        return this.urls[this.index];
    }

    goBack() {
        return this.urls[this.index--];
    }

    forward() {
        return this.urls[this.index++];
    }
}

const bh = new BrowserHistory();
bh.visit('A');
console.log(bh.current());
bh.visit('B');
console.log(bh.current());
bh.visit('C');
console.log(bh.current());
bh.goBack();
console.log(bh.current());
bh.visit('D');
console.log(bh.current());
// Output:
// "A"
// "B"
// "C"
// "B"
// "D"