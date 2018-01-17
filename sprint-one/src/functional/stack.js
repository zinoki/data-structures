var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var popped = someInstance[count-1];
    someInstance[count] = undefined;
    count--;
    return popped;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
