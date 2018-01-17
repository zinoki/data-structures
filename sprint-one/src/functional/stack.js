var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
  };

  someInstance.pop = function() {
    count--;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
