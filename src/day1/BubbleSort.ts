
/**
 * bubble sort is how you imagine array.sort to work.
 * For every item in the array (loop 1)
 * createa second loop and compare items, 0:1, 1:2, 2:3 etc, all the way to the end
 * if the first is larger than the second swap them.  For each cycle the largest value will move to the end.
 * By the time you've run the entire scenario all numbers will be in order 
 * Improve the speed by running the inner loop - index of outer loop.  since the previous iteration move the
 * largest number to the end, you don't need to resort that number.
 * Double looping means O(n)2 performance
*/
export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {
              const num = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = num;
          }
      }
  }
}
