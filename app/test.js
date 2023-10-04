class BrowserHistory {
  constructor() {
    this.historyStack = [];
    this.currentIndex = -1;
  }

  // Visit a new URL and add it to the history
  visit(url) {
    // Remove forward history when navigating to a new URL
    if (this.currentIndex < this.historyStack.length - 1) {
      this.historyStack = this.historyStack.slice(0, this.currentIndex + 1);
    }

    // Add the new URL to the history stack
    this.historyStack.push(url);
    this.currentIndex++;
  }

  // Go back to the previous page
  backward() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Go forward to the next page
  forward() {
    if (this.currentIndex < this.historyStack.length - 1) {
      this.currentIndex++;
    }
  }

  // Get the current URL
  current() {
    return this.historyStack[this.currentIndex];
  }
}

const bh = new BrowserHistory();
bh.visit('A');
console.log(bh.current());

bh.visit('B');
console.log(bh.current());

bh.visit('C');
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.visit('D');
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.forward();
console.log(bh.current());
