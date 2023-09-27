function bubble_sort(arr: number[]): void {
  // Get the number of elements in the array.
  const n: number = arr.length;
  // Create a flag 'swapped' to track whether any swaps were made in a pass.
  let swapped: boolean;
  // Continue the loop as long as there were swaps in the previous pass.
  do {
    swapped = false;
    // Iterate through the array to compare adjacent elements.
    for (let i = 0; i < n - 1; i++) {
      // If the current element is greater than the next element, swap them.
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1] using a temporary variable 'temp'.
        const temp: number = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // Set 'swapped' to true to indicate that a swap occurred in this pass.
        swapped = true;
      }
    }
  } while (swapped); // Repeat the process if any swaps were made in the pass.
}

// Example usage:
function run_test_bubble_sort() {
  const myArray: number[] = [64, 34, 25, 12, 22, 11, 90];
  console.log("unsorted: ", myArray);
  bubble_sort(myArray);
  console.log("sorted: ", myArray); // Sorted array
}
run_test_bubble_sort();
