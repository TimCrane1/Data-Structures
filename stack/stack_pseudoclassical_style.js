// Pseudo-classical style
var Stack = function() {
  this.count = 0;
};

Stack.prototype.push = function(value){
    this.count++;
    this[this.count] = value;
  };
Stack.prototype.pop = function(){
    var temp = this[this.count];
    delete this[this.count];
    if (this.count > 0) {
      this.count--;
    }
    return temp;
  };
Stack.prototype.size = function(){
    return this.count;
  };

var someInstance = new Stack();