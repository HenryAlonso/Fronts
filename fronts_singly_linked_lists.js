class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);

        // Checking to see if the current list does not have a head node (if the list is empty)
        if(!this.head) { 
            this.head = new_node
            return this;
        }

        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }

    removeFront() {
        //Always check to make sure the list is not empty and return null if it is
        if(!this.head) {
            return null;
        }
        //Creating a variable to hold the current value in our head node in the list if we ever need it for another method etc. Return removed_head if that is the case.
        const removed_head = this.head;
        //Assigning the following node attached to our head to the head node position in our list
        this.head = this.head.next;

        return this.head;
    }

    front() {
        //As always, check to make sure our list is not empty and return null if it is
        if(!this.head) {
            return null;
        }

        //Get the value of the head node in our list
        let current_head_value = this.head.data;
        //Return that value
        return current_head_value
    }
    
    findSum() {
        if(!this.head) {
            return null;
        }

        let runner = this.head;
        let sum = 0;

        while (runner != null) {
            sum += runner.data
            runner = runner.next
        }
        return sum
    }

    contains(value) {
        if(!this.head) {
            return null;
        }
        let runner = this.head;

        while (runner != null) {
            if(value === runner.data) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

SLL1 = new LinkedList();
console.log("Adding values to our Singly Linked List");
SLL1.addFront(18)
SLL1.addFront(40)
SLL1.addFront(25)
console.log(SLL1);
console.log('\n');

console.log("Adding the values in our nodes together");
sum = SLL1.findSum();
console.log("The sum is equal to", sum);
console.log('\n');

console.log("Removing values from our list");
SLL1.removeFront();
console.log(SLL1);
console.log('\n');

console.log("Returning the value of the node at the head of the list");
head_value = SLL1.front();
console.log("Current head value: ", head_value);

console.log("Checking to see if the provided value exists in any of our nodes");
value_to_be_checked = SLL1.contains(20);
console.log(value_to_be_checked ? "It does exist" : "It does not exist");
value_to_be_checked = SLL1.contains(15);
console.log(value_to_be_checked ? "It does exist" : "It does not exist");
