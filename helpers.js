const ExpressError = require("./expressError");

function getNums(numStr) {
  if (numStr === undefined || numStr.trim().length === 0) {
    throw new ExpressError("nums are required", 400);
  }
  const nums = numStr.split(",");

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (isNaN(nums[i])) {
      throw new ExpressError(`${num} is not a number`, 400);
    }
  }
  return nums;
}

function findMean(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total / nums.length;
}

function findMedian(nums) {
  const { length } = nums;

  nums.sort((a, b) => a - b);

  if (nums.length % 2 === 0) {
    return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  }

  return nums[(length - 1) / 2];
}

function findMode(nums) {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
}

module.exports = {
  getNums,
  findMean,
  findMedian,
  findMode,
};
