function List(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node(value){
    this.value = value;
    this.next = null;
};

List.prototype.append = function(value){
//if list is empty, head = new node, else, traverse list to last node, next = new node
    var current = this.head;
    if(this.length === 0){
        this.head = new Node(value);
    }
    else{
        while(current.next){
            current = current.next;
        }
        current.next = new Node(value);
    }
    this.length++;
}

//TODO currently inserting one position too far ahead
List.prototype.insert = function(value, index){
    var current = this.head;
    var previous;
    if (index === 0) {
        this.head = new Node(value);
        if (this.length != 0) {
            this.head.next = current;
        }
    }
    else if (index >= this.length -1) {
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
    else {
        previous = current;
        for (var i = 0; i < this.length; i++) {
            previous = current;
            current = current.next;
            if (i === index) {
                previous.next = new Node(value);
                previous.next.next = current;
            }
        }
    }
    this.length++;
}

List.prototype.contains = function(target){
//traverse list if value found return true, else, return false
    if (this.length === 0) return false;
    var current = this.head;
    for (var i = 0; i < this.length; i++) {
        if (current.value === target) {
            return true;
        }
        current = current.next;
    }
    return false;
}

List.prototype.remove = function(index){
//traverse to the object, connect previous and next, delete node
}

List.prototype.length = function(){
    return this.length;
}

List.prototype.indexOf = function(){
    return /*index of first instance of value, else return -1 if not found*/
}