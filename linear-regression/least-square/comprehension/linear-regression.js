// https://en.wikipedia.org/wiki/Least_squares
// https://www.youtube.com/watch?v=JvS2triCgOY&t=304s

const average = require('./average.js');
const distanceToMean = require('./distance-to-mean.js');
const squareDistance = require('./square-distance.js');
const multiplyMeans = require('./multiply-means.js');
const calculateB1 = require('./calculate-b1.js');
const calculateB0 = require('./calculate-b0.js');

const observations = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]

// Calculate mean for each observation axis
let xAverage = average(observations, 'x');
let yAverage = average(observations, 'y');

// Calculate each observation's distance from its axises mean
let observationsWithDistancesXOnly = distanceToMean(observations, 'x', xAverage);
let observationsWithDistances = distanceToMean(observationsWithDistancesXOnly, 'y', yAverage);

// Calculate the squared distance for indepedent
let observationsWithDistanceSquares = squareDistance(observationsWithDistances);

// Calculate the product of each observations distance from the mean
let finalProductsTable = multiplyMeans(observationsWithDistanceSquares);

// Calculate b1 value
let b1 =  calculateB1(finalProductsTable);
console.log(b1);

// Calculate b0 value
let b0 = calculateB0(xAverage, yAverage, b1);
console.log(b0);

// Calculate FINAL_SOLUTION
let FINAL_SOLUTION =  b0 + (b1 * xAverage);
console.log(FINAL_SOLUTION);
