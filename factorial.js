// Given an integer 'n', find the factorial of that integer
// in math, the factorial of a non-negative integer 'n, denoted n!, is the product of all positive integers less than or equal to 'n'.
// Factorial of zero is 1. factorial(4) = 4 * 3 * 2 * 1 = 24

const factorial = (n) => {
  let product = 1;
  // start at n and multiply until n equals 1
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
// BigO - O(n)

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1

