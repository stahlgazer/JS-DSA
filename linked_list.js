// Step 1: Define a Node class to represent elements in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Step 2: Create a LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
    this.size = 0; // Tracks the size of the linked list
  }

  // Step 3: Add an element to the end of the linked list
  append(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Step 4: Remove an element from the linked list
  remove(element) {
    if (this.isEmpty()) {
      return "Linked list is empty";
    }

    if (this.head.value === element) {
      this.head = this.head.next;
      this.size--;
      return element;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === element) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        this.size--;
        return element;
      }
      currentNode = currentNode.next;
    }

    return "Element not found in the linked list";
  }

  // Step 5: Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Step 6: Get the size of the linked list
  getSize() {
    return this.size;
  }
}

// Step 7: Create a new LinkedList instance
const myList = new LinkedList();
// Step 8: Append elements to the linked list
myList.append(10);
myList.append(20);
myList.append(30);
// Step 9: Remove elements from the linked list
console.log("Removed:", myList.remove(20)); // Output: Removed: 20
// Step 10: Check if the linked list is empty
console.log("Is the linked list empty?", myList.isEmpty()); // Output: Is the linked list empty? false
// Step 11: Get the size of the linked list
console.log("Linked list size:", myList.getSize()); // Output: Linked list size: 2
