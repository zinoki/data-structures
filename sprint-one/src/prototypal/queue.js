var Queue = function() {
  var obj = Object.create(queueMethods);


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};

var queueMethods = {};
queueMethods.size = function() {
  return this.right - this.left < 0 ? 0 : this.right - this.left;
};
queueMethods.enqueue = function(value) {
  this.values[this.right] = value;
  this.right++;
};
queueMethods.dequeue = function() {
  var temp = this.values[this.left];
  delete this.values[this.left];
  this.left++;
  return temp;
};
queueMethods.values = {};
queueMethods.right = 0;
queueMethods.left = 0;
