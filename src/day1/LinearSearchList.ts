/**
 * For every item in the array, check if it's a match.
 * Simple and relatively slow O(n).
 */
export default function linear_search(
  haystack: number[],
  needle: number,
): boolean {
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
          return true;
      }
  }
  return false;
}
