//Pseudo-classical style
//hashing function and limited-array function included following Hash Table implementation

var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = CappedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = indexBelowMax(k, this._limit);

  var bucket = this._storage.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++) {
    var drop = bucket[j];
    if (drop[0] === k) {
      drop[1] = v;
    }
  }
  bucket.push([k, v]);
  this._storage.set(i, bucket);
  this._size++;
  if (this._size > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = indexBelowMax(k, this._limit);
  
  var bucket = this._storage.get(i) || [];
  
  for (var j = 0; j < bucket.length; j++) {
    var drop = bucket[j];
    if (drop[0] === k) {
      return drop[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var i = indexBelowMax(k, this._limit);
  this._storage.set(i, null);
  this.size--;
  if (this._size < this._limit * 0.25) {
    this.resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype.resize = function(newSize) {
  var oldSize = this._storage;
  this._limit = newSize;
  this._storage = CappedArray(this._limit);
  this._size = 0;
};

//Hashing Function (borrowed)
var indexBelowMax = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//Limited Array Function (borrowed)
var CappedArray = function(limit){
  var storage = [];

  var CappedArray = {};
  CappedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  CappedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  CappedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return CappedArray;
};


