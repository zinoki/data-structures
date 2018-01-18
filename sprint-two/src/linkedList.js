var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head == null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var deletedHead = list.head;
    list.head = deletedHead.next;
    return deletedHead.value;
    
  };

  list.contains = function(target) {
    var currentHead = list.head;
    while (currentHead) {
      if (currentHead.value === target) {
        return true;
      }
      currentHead = currentHead.next;
    };
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
