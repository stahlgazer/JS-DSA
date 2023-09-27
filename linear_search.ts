// find the needle in the haystack
function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true; // Return true if the target element is found
    }
  }
  return false; // Return false to indicate that the target is not in the array
}

// Example usage:
function run_test_linear_search() {
  const myArray: number[] = [10, 5, 3, 8, 2, 6];
  const targetElement: number = 8;
  const found: boolean = linear_search(myArray, targetElement);

  if (found) {
    console.log(`Element ${targetElement} found in the array.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
}
run_test_linear_search();
