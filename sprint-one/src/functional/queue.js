var Queue = function() {
  var someInstance = {};
  var current = 0;
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};



  someInstance.enqueue = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = someInstance[current];
    current++;
    return temp;
  };

  someInstance.size = function() {
    var count = size - current;
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
