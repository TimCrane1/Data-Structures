var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //  addToTail time complexity is O(n) or linear-time
  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var temp = this.tail;
      temp.next = new Node(value);
      this.tail = temp.next;
    }
    console.log('list', list)
  };

  //  removeHead time complexity is 0(1) or constant-time
  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  //  contains time complexity is 0(n) or linear-time
  list.contains = function(target) {
    var current = list.head;
    if (list.tail.value === target) {
      return true;
    }
    while (current.next) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
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

