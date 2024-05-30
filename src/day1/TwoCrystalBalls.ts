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
