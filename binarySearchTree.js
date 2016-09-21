// Functional style w/ shared methods (using extend from the underscore library)
var BinarySearchTree = function(value) {
  var bst = _.extend({}, bstMethods);
  bst.value = value;

  
  return bst;
};

var bstMethods = {
  insert: function(value) {
    //if parameter value is greater than the invoking objects value create a left object 
    //with a value equal to the parameter value, inverse for a less than parameter value
    if (this.value > value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  
  contains: function(value) {
    //check if the invoking object's value is the target value,
    //if not, check the left or right with a recursive call to contains
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (!this.left) {
        return false;
      }
      return this.left.contains(value);
      } else {
        if (!this.right) {
          return false;
        }
        return this.right.contains(value);
        }
  },

  depthFirstLog: function(callback) {
    //invoke the callback on the value of the invoking object,
    //if child nodes exist, recursively invoke the callback on the value of these nodes as 
    //parameter passed to depthFirstLog
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }
}


