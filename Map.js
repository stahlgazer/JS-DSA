const map1 = new Map();

// Examples: size, get, set, has, keys, values, clear, delete, entries, forEach

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.has("a"));
// expected output: true
console.log(map1.get("a"));
// Expected output: 1
map1.set("a", 97);
console.log(map1.get("a"));
// Expected output: 97
console.log(map1.size);
// Expected output: 3
map1.delete("b");
console.log(map1.size);
// Expected output: 2
console.log(map1.entries());
// Expected output: [Map Entries] { [ 'a', 97 ], [ 'c', 3 ] }
console.log(map1.keys());
// Expected output: [Map Iterator] { 'a', 'c' }
console.log(map1.values());
// Expected output: [Map Iterator] { 97, 3 }

// value goes first in parameters
map1.forEach((value, key) => console.log(key, value));
// 97 a
// 3 c
map1.clear();
console.log(map1);
// Expected output: Map(0) {}
