// Step 1: Define a Node class to represent elements in the stack
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Step 2: Create a Stack class
  class Stack {
    constructor() {
      this.top = null; // Points to the top of the stack
      this.size = 0; // Tracks the size of the stack
    }
  
    // Step 3: Push an element onto the stack
    push(element) {
      const newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    // Step 4: Pop and return the element from the top of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      const poppedElement = this.top.value;
      this.top = this.top.next;
      this.size--;
      return poppedElement;
    }
  
    // Step 5: Peek at the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.top.value;
    }
  
    // Step 6: Check if the stack is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Step 7: Get the size of the stack
    getSize() {
      return this.size;
    }
  }
  
  // Step 8: Create a new Stack instance
  const myStack = new Stack();
  
  // Step 9: Push elements onto the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  
  // Step 10: Pop elements from the stack
  console.log("Popped:", myStack.pop()); // Output: Popped: 30
  console.log("Popped:", myStack.pop()); // Output: Popped: 20
  
  // Step 11: Peek at the top element of the stack
  console.log("Top element:", myStack.peek()); // Output: Top element: 10
  
  // Step 12: Check if the stack is empty
  console.log("Is the stack empty?", myStack.isEmpty()); // Output: Is the stack empty? false
  
  // Step 13: Get the size of the stack
  console.log("Stack size:", myStack.getSize()); // Output: Stack size: 1
  