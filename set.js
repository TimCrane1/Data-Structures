//Prototypal style
var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};
//only allow unique values in the set
setPrototype.add = function(item){
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  this._storage.splice(this._storage.indexOf(item), 1);
};


