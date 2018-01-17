var Stack = function() {
  var obj = {};
  obj.right = 0;
  obj.left = 0;
  obj.size = this.right - this.left;
  obj.size = stackMethods.size;
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return obj;
};



var stackMethods = {};
stackMethods.size = function() {
  return this.right-this.left;
}
stackMethods.push = function(value) {
  this.right++;
}
stackMethods.pop = function() {
  this.left++;

}
