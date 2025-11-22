function minJumps(nums) {
  let jumps = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    end = Math.max(end, i + nums[i]);

    if (i === start) {
      jumps++;
      start = end;
    }
  }

  return jumps;
}

console.log(minJumps([2, 3, 1, 1, 4]));
