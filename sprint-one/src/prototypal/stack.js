var Stack = function() {
  var obj = Object.create(stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};
stackMethods.push = function(value) {
  this.values[this.count] = value;
  this.count++;
};
stackMethods.pop = function() {
  var temp = this.values[this.count - 1];
  delete this.values[this.count - 1];
  this.count--;
  return temp;
};
stackMethods.values = {};
stackMethods.count = 0;
