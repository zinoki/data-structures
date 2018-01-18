var Queue = function() {
  var obj = {};
  var storage = {};
  obj.values = storage;
  obj.right = 0;
  obj.left = 0;
  _.extend(obj, queueMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};
queueMethods.size = function() {
  return this.right - this.left < 0 ? 0 : this.right - this.left;
  //return Object.keys(this.values).length;
}

queueMethods.enqueue = function(value) {
  this.values[this.right] = value;
  this.right++;
}

queueMethods.dequeue = function() {
  var temp = this.values[this.left];
  delete this.values[this.left-1];
  this.left++;
  return temp;

}
