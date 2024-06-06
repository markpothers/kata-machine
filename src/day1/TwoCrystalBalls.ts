/**
 * Two crystal balls is an improvement over linear search. The rule is you are allowed to go false twice.
 * You could do it once with a linear search but that's slower.
 * Best case scenario here is to find the square root of the length and jump forward in steps 
 * of the square root. Once you get a break (true), step back one square root and then run a 
 * linear search.
 * Performance vs a linear search is improved to O(root n)
 */
export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = 0;
  let broken = false;

  while (!broken && i <= breaks.length) {
      i += jump;
      if (breaks[i]) {
          broken = true;
      }
  }

  if (broken) {
      i -= jump;

      for (let j = i; j < i + jump; j++) {
          if (breaks[j]) {
              return j;
          }
      }
  }

  return -1;
}
