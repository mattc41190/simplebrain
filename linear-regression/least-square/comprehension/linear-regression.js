// y = b0 * (b1 * avg(xValues))

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

// Create averages for each axis
let xAverage = average(observations, 'x');
let yAverage = average(observations, 'y');

let observationsWithDistancesXOnly = distanceToMean(observations, 'x', xAverage);
let observationsWithDistances = distanceToMean(observationsWithDistancesXOnly, 'y', yAverage);

// Now that we have our distance from the mean data in our table we can square the indepedent (x axis) values
let observationsWithDistanceSquares = squareDistance(observationsWithDistances);

// In addition we need to find the product of multiplying both means together
let finalProductsTable = multiplyMeans(observationsWithDistanceSquares);
// console.log(finalProductsTable);


let b1 =  calculateB1(finalProductsTable);

console.log(b1);

let b0 = calculateB0(xAverage, yAverage, b1);

console.log(b0);

let FINAL_SOLUTION =  b0 + (b1 * xAverage);

console.log(FINAL_SOLUTION);
