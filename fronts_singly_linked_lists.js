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

        if(!this.head) { 
            this.head = new_node
            return this;
        }

        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        if(!this.head) {
            return null;
        }
        const removed_head = this.head;
        this.head = this.head.next;

        return this.head;
    }

    front() {
        if(!this.head) {
            return null;
        }

        let current_head_value = this.head.data;
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
            return false;
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

    length() {
        let nodes = 0;

        if(!this.head) {
            return nodes;
        }
        let runner = this.head;

        while (runner != null) {
            nodes += 1;
            runner = runner.next;
        }
        return nodes;
    }
}

const SLL1 = new LinkedList();
console.log("Adding values to our Singly Linked List");
SLL1.addFront(15)
SLL1.addFront(40)
SLL1.addFront(25)
console.log(SLL1);
console.log('\n');

console.log("Here is the amount of nodes in the list");
let length = SLL1.length();
console.log("There are:", length, "nodes in the list");
console.log('\n');

console.log("Adding the values in our nodes together");
const sum = SLL1.findSum();
console.log("The sum is equal to", sum);
console.log('\n');

console.log("Removing values from our list");
SLL1.removeFront();
console.log(SLL1);
console.log('\n');

console.log("Returning the value of the node at the head of the list");
const head_value = SLL1.front();
console.log("Current head value: ", head_value);
console.log('\n');

console.log("Checking to see if the provided value exists in any of our nodes");
let value_to_be_checked = SLL1.contains(20);
console.log(value_to_be_checked ? "It does exist" : "It does not exist");
value_to_be_checked = SLL1.contains(15);
console.log(value_to_be_checked ? "It does exist" : "It does not exist");
