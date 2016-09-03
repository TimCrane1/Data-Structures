// Functional style w/ shared methods (using extend from the underscore library)
var Stack = function() {
  var someInstance = _.extend({}, stackMethods);
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.count++;
    this[this.count] = value;
  },
  pop: function () {
    var temp = this[this.count];
    delete this[this.count];
    if (this.count > 0) {
      this.count--;
    }
    return temp;
  },
  size: function () {
    return this.count;
  }
};


