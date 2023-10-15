// Examples: size, add, has, keys/values, clear, delete, entries, forEach
// Create a new Set
const set1 = new Set();
// Add elements to the Set
set1.add(1);
set1.add(2);
set1.add(3);
// Check if an element exists in the Set
console.log(set1.has(1)); // true
console.log(set1.has(4)); // false
// Get the size of the Set
console.log("size", set1.size); // size 3
// Show keys/values + entries
console.log(set1.keys()) // [Set Iterator] { 1, 2, 3 }
console.log(set1.values()) // [Set Iterator] { 1, 2, 3 }
console.log(set1.entries()) // [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
// Delete an element from the Set
set1.delete(2); 
// Iterate over the Set
for (const element of set1) { 
  console.log(element); // 1, 3
}
// forEach
set1.forEach(value => console.log(value)) // 1, 3
// Clear the Set
set1.clear();
console.log(set1) // Set(0) {}

