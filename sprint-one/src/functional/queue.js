var Queue = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var temp = someInstance[count-1];
    someInstance[count] = undefined;
    count--;
    return temp;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
