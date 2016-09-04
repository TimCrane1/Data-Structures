// Pseudo-classical style
var Queue = function() {
  this.someInstance = {};
  this.count = 0;
  this.frontOfLine = 1;
  this.endOfLine = 0;
};

Queue.prototype.enqueue = function(value) {
    this.count++;
    this.endOfLine++;
    this[this.endOfLine] = value;
  };
Queue.prototype.dequeue = function() {
    var temp = this[this.frontOfLine];
    delete this[this.frontOfLine];
    if (this.count > 0) {
      this.count--;
    }
    this.frontOfLine++;
    return temp;
  };
Queue.prototype.size = function() {
    return this.count;
  };


var someInstance = new Queue();
