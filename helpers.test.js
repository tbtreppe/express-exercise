const { getNums, findMean, findMedian, findMode } = require("./helpers");

describe("Helper function tests", function () {
  test("findMean", function () {
    expect(findMean([1, 3])).toEqual(2);
    expect(findMean([1, 2])).toBeCloseTo(1.5);
  });

  test("findMedian", function () {
    expect(findMedian([1, 2, 3])).toEqual(2);
    expect(findMedian([1, 2])).toBeCloseTo(1.5);
  });

  test("findMode", function () {
    expect(findMode([1, 2, 4, 6, 1, 4, 1])).toEqual([1]);
    expect(findMode([1, 2, 3])).toEqual([]);
  });
});
