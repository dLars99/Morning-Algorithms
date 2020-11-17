/* S I N G L Y   L I N K E D   L I S T
Constructing the data structure of the singly linked list. So far, our list includes the following methods:
    - Constructor
    - Push
*/

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        /* Our solution
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
        } else if (this.length === 1) {
            this.tail = new Node(val);
            this.head.next = this.tail;
        } else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;

        } */

        // Their solution
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            
        this.length++;
        return this;
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("???")
list.push("GOODBYE")
list.push("!!!!")

console.log(list)


