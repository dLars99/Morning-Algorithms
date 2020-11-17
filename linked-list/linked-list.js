/* S I N G L Y   L I N K E D   L I S T
Constructing the data structure of the singly linked list. So far, our list includes the following methods:
    - Constructor
    - Push
*/

// Node class - the linked list is built of member 'Nodes'
// piece of data - val
// reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// The linked list itself, starting with a constructor to initialize an empty list
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 'push' to add a new value to the end of the list
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
        // 1. Instantiate a new Node
        const newNode = new Node(val);
        if (!this.head) {
            // 2a. Set head and tail to new node if the list is empty
            this.head = newNode;
            this.tail = this.head;
        } else {
            // 2b. Connect the old tail to the new node and set it to the new tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        // 3. Increase the length
        this.length++;
        // 4. Return the list
        return this;
    }

    // 'pop' to remove the last item from the list
    pop() {
        // If no nodes, return undefined
        if (this.length === 0) return undefined;
        // Loop through until you reach the tail
        let current= this.head;
        let prev;
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        // Set the next property of the 2nd to last node to be null
        prev.next = null;
        // Set the tail to the 2nd to last node
        this.tail = prev;
        // Decrement length
        this.length--;
        // If all items are removed...
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // Return the value of the removed node
        return current.val;
    }

    /* Sample code to traverse the list
    traverse() {
        var current= this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    */

}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("???")
list.push("GOODBYE")
list.push("!!!!")
list.push("POP")

console.log(list.pop())