const express = require("express");
const { getNums, findMean, findMedian, findMode } = require("./helpers");
const ExpressError = require("./expressError");

const app = express();

app.use(express.json());

app.get("/mean", function (req, res, next) {
  try {
    const nums = getNums(req.query.nums);
    const result = findMean(nums);

    return res.json({ operation: "mean", value: result });
  } catch (err) {
    next(err);
  }
});

app.get("/median", function (req, res, next) {
  try {
    const nums = getNums(req.query.nums);
    const result = findMedian(nums);

    return res.json({ operation: "median", value: result });
  } catch (err) {
    next(err);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    const nums = getNums(req.query.nums);
    const result = findMode(nums);

    return res.json({ operation: "mode", value: result });
  } catch (err) {
    next(err);
  }
});

/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("App is on port 3000");
});
