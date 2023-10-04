// Step 1: Define a Node class to represent elements in the queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Step 2: Create a Queue class
class Queue {
  constructor() {
    this.head = null; // Points to the front of the queue
    this.tail = null; // Points to the rear of the queue
    this.size = 0; // Tracks the size of the queue
  }

  // Step 3: Add an element to the end of the queue
  enqueue(element) {
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

  // Step 4: Remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const removedElement = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removedElement;
  }

  // Step 5: Get the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  // Step 6: Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Step 7: Get the size of the queue
  getSize() {
    return this.size;
  }
}

// Step 8: Create a new Queue instance
const myQueue = new Queue();
// Step 9: Enqueue elements into the queue
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
// Step 10: Dequeue elements from the queue
console.log("Dequeued:", myQueue.dequeue()); // Output: Dequeued: 10
console.log("Dequeued:", myQueue.dequeue()); // Output: Dequeued: 20
// Step 11: Peek at the front element of the queue
console.log("Front element:", myQueue.peek()); // Output: Front element: 30
// Step 12: Check if the queue is empty
console.log("Is the queue empty?", myQueue.isEmpty()); // Output: Is the queue empty? false
// Step 13: Get the size of the queue
console.log("Queue size:", myQueue.getSize()); // Output: Queue size: 1
