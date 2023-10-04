// Step 1: Define a Node class to represent elements in the doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Points to the next node
    this.prev = null; // Points to the previous node
  }
}

// Step 2: Create a DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
    this.size = 0; // Tracks the size of the doubly linked list
  }

  // Step 3: Add an element to the end of the doubly linked list
  append(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Step 4: Remove an element from the doubly linked list
  remove(element) {
    if (this.isEmpty()) {
      return "Doubly linked list is empty";
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === element) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }

        this.size--;
        return element;
      }
      currentNode = currentNode.next;
    }

    return "Element not found in the doubly linked list";
  }

  // Step 5: Check if the doubly linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Step 6: Get the size of the doubly linked list
  getSize() {
    return this.size;
  }
}

// Step 7: Create a new DoublyLinkedList instance
const myDoublyLinkedList = new DoublyLinkedList();
// Step 8: Append elements to the doubly linked list
myDoublyLinkedList.append(10);
myDoublyLinkedList.append(20);
myDoublyLinkedList.append(30);
// Step 9: Remove elements from the doubly linked list
console.log("Removed:", myDoublyLinkedList.remove(20)); // Output: Removed: 20
// Step 10: Check if the doubly linked list is empty
console.log("Is the doubly linked list empty?", myDoublyLinkedList.isEmpty()); // Output: Is the doubly linked list empty? false
// Step 11: Get the size of the doubly linked list
console.log("Doubly linked list size:", myDoublyLinkedList.getSize()); // Output: Doubly linked list size: 2
