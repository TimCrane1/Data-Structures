// Functional style w/ shared methods (using extend)
var Tree = function(value) {
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  //check if root node is target
  if (this.value === target) {
    return true;
  }
  //iterate through the array of children calling contains recursively
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



