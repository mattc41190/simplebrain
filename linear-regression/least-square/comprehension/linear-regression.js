// https://en.wikipedia.org/wiki/Least_squares
// https://www.youtube.com/watch?v=JvS2triCgOY&t=304s

const average = require('./average.js');
const appendMeanDistance = require('./append-distance-to-mean.js');
const appendSquaredDistance = require('./append-squared-distance.js');
const multiplyMeans = require('./multiply-means.js');
const calculateB1 = require('./calculate-b1.js');
const calculateB0 = require('./calculate-b0.js');

//NOTE: Observations state is not static!
let observations = [
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
observations = appendMeanDistance(observations, xAverage, yAverage);

// Calculate the squared distance for indepedents
observations = appendSquaredDistance(observations);

// Calculate the product of each observations distance from the mean
observations = multiplyMeans(observations);

// Calculate b1 value
let b1 = calculateB1(observations);
console.log(b1);

// Calculate b0 value
let b0 = calculateB0(xAverage, yAverage, b1);
console.log(b0);

// Calculate FINAL_SOLUTION
let FINAL_SOLUTION =  b0 + (b1 * xAverage);
console.log(FINAL_SOLUTION);
