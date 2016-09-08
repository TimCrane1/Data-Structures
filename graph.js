

var Graph = function() {
  this.nodes = [];
};

Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges = {};
};

Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  this.nodes = this.nodes.filter(function(n) {
    return n !== node;
  })
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var props = Object.keys(this.edges);
  var vals = [];
  for (var val in this.edges) {
    vals.push(this.edges[val])
  }
  if (props.indexOf(fromNode) !== -1 && vals.indexOf(toNode) !== -1 ||
      props.indexOf(toNode) !== -1 && vals.indexOf(fromNode) !== -1) {
    return true;
  }
  return false;
 };

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var prop in this.edges) {
    if (this.edges[prop] === fromNode || this.edges[prop] === toNode) {
      delete this.edges[prop];
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};



