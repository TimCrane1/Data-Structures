// Prototypal style
var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.frontOfLine = 1;
  someInstance.endOfLine = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.endOfLine++;
    this[this.endOfLine] = value;
  },
  dequeue: function() {
    var temp = this[this.frontOfLine];
    delete this[this.frontOfLine];
    if (this.count > 0) {
      this.count--;
      this.frontOfLine++;
      return temp;
    }
  },
  size: function() {
    return this.count;
  }

};

