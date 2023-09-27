// find the needle in the haystack
function binary_search(haystack: number[], needle: number): boolean {
  let lo = 0;
  let high = haystack.length - 1;

  while (lo <= high) {
    const mid = Math.floor((lo + high) / 2); // find the middle

    if (haystack[mid] === needle) {
      return true; // Return true if the target element is found
    } else if (needle > haystack[mid]) {
      lo = mid + 1; // needle higher than mid, make mid + 1 the new low
    } else {
      high = mid - 1; // needle lower than mid, make mid - 1 the new high
    }
  }
  return false;
  // Return false to indicate that the target is not in the array
}

// Example usage:
function run_test_binary_search() {
  const myArray: number[] = [2, 3, 5, 6, 8, 10];
  const targetElement: number = 8;
  const found: boolean = binary_search(myArray, targetElement);

  if (found) {
    console.log(`Element ${targetElement} found in the array.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
}
run_test_binary_search();
