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
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
      list.count++;
    }
  };
  
  list.removeTail = function() {
    var deletedTail = list.tail.value;
    if (list.count > 1) {
      list.tail = list.tail.previous;
      delete list.tail.next;
    } else if (list.count === 1) {
      delete list.tail;
    }
    list.count--;
    return deletedTail;
  };
  
  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.head == null) {
      list.head = newNode;
      list.tail = newNode;
      list.count++;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
      list.count++;
    }
  };
  

  list.removeHead = function() {
    var deletedHead = list.head.value;
    if (list.count > 1) {
      list.head = list.head.next;
      delete list.head.previous;
    } else if (list.count === 1) {
      delete list.head;
    }
    list.count--;
    return deletedHead;
    
  };

  list.contains = function(target) {
    var currentHead = list.head;
    while (currentHead) {
      if (currentHead.value === target) {
        return true;
      }
      currentHead = currentHead.next;
    }
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
  node.previous = null;

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
