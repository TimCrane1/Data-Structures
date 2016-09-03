var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var frontOfLine = 1;
  var endOfLine = 0;

  // Methods below
  someInstance.enqueue = function(value) {
    count++;
    endOfLine++;
    someInstance[endOfLine] = value;
  };

  someInstance.dequeue = function() {
    var temp = someInstance[frontOfLine];
    delete someInstance[frontOfLine];
    if (count > 0) {
      count--;
    }
    frontOfLine++;
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
