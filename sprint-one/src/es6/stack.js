class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.values = {};
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }

  push(value) {
    this.values[this.count] = value;
    this.count++;
  }

  pop() {
    var temp = this.values[this.count - 1];
    delete this.values[this.count - 1];
    this.count--;
    return temp;
  }
}
