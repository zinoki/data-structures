var BinarySearchTree = function(value) {
  var BinarySearchTree = Object.create(BinarySearchTreeMethods);
  BinarySearchTree.right = null;
  BinarySearchTree.left = null;
  BinarySearchTree.value = value;
  
  return BinarySearchTree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  if (this.value > value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (this.value < value && this.right === null) {
    this.right = BinarySearchTree(value);
  } else if (this.value > value && this.left !== null) {
    this.left.insert(value);
  } else if (this.value < value && this.right !== null) {
    this.right.insert(value);
  }
};

BinarySearchTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } 
  
  if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }

  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } if (this.right !== null) {
    this.right.depthFirstLog(cb);
  } 
};
 
/*
 * Complexity: What is the time complexity of the above functions?
BinarySearchTree = O(1)
insert = O(log(n))
contains = O(log(n))
depthFirstLog = O(log(n))
 */
