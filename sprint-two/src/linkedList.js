var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head == null) {
      list.head = newNode;
      list.tail = newNode;
      list.count++;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
      list.count++;
    }
    
  };

  list.removeHead = function() {
    var deletedHead = list.head;
    list.head = deletedHead.next;
    list.count--;
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

  list.size = function() {
    return list.count;
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
 LinkedList = O(1)
 addToTail = O(1)
 removeHead = O(1)
 contains = O(n)
 Node = O(1)
 size = O(1);
 */
