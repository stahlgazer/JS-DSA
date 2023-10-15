// Examples: size, get, set, has, keys, values, clear, delete, entries, forEach
// Create a new Map
const map1 = new Map();
// Add elements to the Map
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
// Check if Map has element
console.log(map1.has("a")); // expected output: true
// Get Map key
console.log(map1.get("a")); // Expected output: 1
// Set key for Map
map1.set("a", 97);
console.log(map1.get("a")); // Expected output: 97
// Map Size
console.log(map1.size); // Expected output: 3
// Delete key
map1.delete("b");
console.log(map1.size); // Expected output: 2
// Show entries
console.log(map1.entries()); // Expected output: [Map Entries] { [ 'a', 97 ], [ 'c', 3 ] }
// Show keys
console.log(map1.keys()); // Expected output: [Map Iterator] { 'a', 'c' }
// Show values
console.log(map1.values()); // Expected output: [Map Iterator] { 97, 3 }
// ForEach - value goes first in parameters
map1.forEach((value, key) => console.log(key, value)); // 97 a, 3 c
// Clear the Map
map1.clear();
console.log(map1); // Expected output: Map(0) {}
