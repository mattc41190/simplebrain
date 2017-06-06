function findStdDev(nums) {
  const numsLength = nums.length;
  const average = nums.reduce((sum, current) => {
    return sum += current
  }, 0) / numsLength;
  const sum = nums.reduce((sum, current) => {
    return sum += (current - average) * (current - average)
  }, 0)
  return stdDev = Math.sqrt(sum / (numsLength - 1));
}

let data = [1,2,3,4,5]

findStdDev(data);
