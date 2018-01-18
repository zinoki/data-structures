class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.right = 0;
    this.left = 0;
    this.values = {};
  }

  size() {
    return this.right - this.left < 0 ? 0 : this.right - this.left;
  }

  enqueue(value) {
    this.values[this.right] = value;
    this.right++;
  }

  dequeue() {
    var temp = this.values[this.left];
    delete this.values[this.left];
    this.left++;
    return temp;
  }

}
