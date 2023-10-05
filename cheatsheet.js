/* Methods/Properties cheatsheet and definitions

Types - string, Number, Boolean, Object: {}, Null, Undefined, Symbol, BigInt, Math, Date

Loops:
for (traditional)
for...in (poperties of an object)
for...of (values of iterables ex: arrays, strings)
while (executes if property is true)
do...while (executes then checks property if true)

String:
None of the methods and properties for strings are mutative. Strings in JavaScript are immutable.

length: This property returns the length of the string but does not change the string itself.
toUpperCase(): This method returns a new string with all characters converted to uppercase.
toLowerCase(): This method returns a new string with all characters converted to lowercase.
indexOf(): This method returns the index of the first occurrence of a specified substring.
slice(): This method returns a new string containing a portion of the original string.
split(): This method returns an array of substrings based on a specified delimiter.
from(): This method creates a new string from an array-like or iterable object.

Arrays - Mutative:
push(): Adds one or more elements to the end of an array, modifying the original array.
pop(): Removes the last element from an array, modifying the original array.
shift(): Removes the first element from an array, modifying the original array.
unshift(): Adds one or more elements to the beginning of an array, modifying the original array.
splice(): Changes the contents of an array by removing, replacing, or adding elements, thus mutating the original array.
sort(): Sorts the elements of an array in place but does not create a new array.
reverse(): Reverses the order of elements in an array in place.

Arrays - Non-Mutative:
filter(): Returns a new array with elements that satisfy a provided condition.
concat(): Returns a new array by concatenating one or more arrays or values to the original array.
join(): Joins all elements of an array into a string and returns the string.
toString(): Returns a string representing the array.
forEach(): Iterates through the array but does not modify the array.
map(): Returns a new array with the results of applying a provided function to each element.
findIndex(): Returns the index of the first element in the array that satisfies a provided condition.
indexOf(): Returns the first index at which a given element is found.
includes(): Checks whether an array includes a certain element.
some(): Tests whether at least one element in the array passes a provided condition.
every(): Tests whether all elements in the array pass a provided condition.
reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
at(): Provides an element at a specified index without mutating the array.
find(): Returns the first element in the array that satisfies a provided condition, without modifying the array.

Set - Mutative:
add(): Adds a new element to the Set, modifying the original Set.
delete(): Removes a specified element from the Set, modifying the original Set.
clear(): Removes all elements from the Set, making it empty. This mutates the original Set.

Set - Non-Mutative:
size: This property returns the number of elements in the Set but does not change the Set itself.
has(): Checks whether a specific element exists in the Set but does not modify the Set.
entries(): This method returns an iterator of entries, each containing both the value and the key (which are the same for Sets).
keys(): Returns an iterator of keys in the Set but does not change the Set.
values(): Returns an iterator of values in the Set but does not change the Set.
forEach(): Allows you to iterate over the elements of the Set but does not modify the Set.

*/
