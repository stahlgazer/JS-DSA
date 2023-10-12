/* Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.
More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:
s ≠ t
a[s] + a[t] = k
Example
For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output should be solution(a, m, k) = 5. */

let a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
let arr = [
  1, 9, 5, 4, 3, 8, 7, 2, 3, 4, 8, 2, 1, 4, 5, 4, 5, 9, 8, 3, 9, 7, 4, 3, 4, 5,
  1, 2, 3, 1, 5,
];

function solution(arr, m, k) {
  // number of times a matching pair is equal to k
  let count = 0;
  // loop through array creating subarrays every m length
  for (let i = 0; i < arr.length - m; i++) {
    let sub = arr.slice(i, i + m);
    // loop through each sub array and check number of neighbors with sum === k
    for (let j = 0; j < sub.length; j++) {
      if (sub[i] + sub[j] === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution(arr, 4, 10));
console.log(solution(a, 4, 10));
