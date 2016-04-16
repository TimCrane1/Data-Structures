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

List.prototype.insert(){

}

List.prototype.contains(value){
//traverse list if value found return true, else, return false
}

List.prototype.remove(index){
//traverse to the object, connect previous and next, delete node
}

List.prototype.length(){
    return this.length;
}

List.prototype.indexOf(){
    return /*index of first instance of value, else return -1 if not found*/
}