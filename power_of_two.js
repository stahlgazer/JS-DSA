// Given a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x
// isPowerOfTwo(1) = true 2^0
// isPowerOfTwo(2) = true 2^1
// isPowerOfTwo(4) = true 2^2
// isPowerOfTwo(5) = false

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    // if remainder isn't 0 in any step, 'n' is odd and not a power of two
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2; // keep dividing by 2
  }
  return true;
};
// BigO - O(log n)

console.log(isPowerOfTwo(1)); // true 2^0
console.log(isPowerOfTwo(2)); // true 2^1
console.log(isPowerOfTwo(4)); // true 2^2
console.log(isPowerOfTwo(5)); // false


// can convert to even more efficient constant time using bitwise
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// BigO - O(1)

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(4)); // true
console.log(isPowerOfTwoBitWise(5)); // false

