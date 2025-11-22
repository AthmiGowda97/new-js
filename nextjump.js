function minJumps(arr) {
  if (arr.length <= 1) return 0;
  if (arr[0] === 0) return -1;

  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    farthest = Math.max(farthest, i + arr[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      if (currentEnd >= arr.length - 1) break;
    }
  }

  return jumps;
}

const input = [2, 3, 2, 5, 1, 1, 3, 1, 1, 4];
console.log(minJumps(input));
