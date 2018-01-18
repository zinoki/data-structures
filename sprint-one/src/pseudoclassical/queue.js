var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.left = 0;
  this.right = 0;
  this.values = {};
};


Queue.prototype.size = function() {
  return this.right - this.left < 0 ? 0 : this.right - this.left;
};

Queue.prototype.enqueue = function(value) {
  this.values[this.right] = value;
  this.right++;
};

Queue.prototype.dequeue = function() {
  var temp = this.values[this.left];
  delete this.values[this.left];
  this.left++;
  return temp;
};
