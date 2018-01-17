var Stack = function() {
  var obj = {};
  var storage = {};
  obj.count = 0;
  obj.size = stackMethods.size;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.values = storage;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};



var stackMethods = {};
stackMethods.size = function() {
  return Object.keys(this.values).length;
}

stackMethods.push = function(value) {
  this.values[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  var temp = this.values[this.count-1];
  delete this.values[this.count-1];
  this.count--;
  return temp;
}
