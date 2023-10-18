// Give a number 'n', find the first 'n' elements of the Fibonacci sequence.
// Fibonacci in math is a sequence in which each number is the sum of the two preceeding nums that starts with 0 and 1.
// fib(2)=[0,1] fib(3)=[0,1,1], fib(5)=[0,1,1,2,3]

const fibonacci = (n) => { // O(n)
  const fibs = [0, 1];
  for (let i = 2; i < n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }
  return fibs;
}; 

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

