var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.values = {};
};


Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};

Stack.prototype.push = function(value) {
  this.values[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var temp = this.values[this.count - 1];
  this.count--;
  return temp;
};
