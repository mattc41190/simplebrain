var console = require('better-console');


/** train uses a set of observations to create b0 and b1
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Object} - Object containg b0 and b1 values
 */
function train(observations) {
  let { xMean, yMean } = axisAverage(observations);
  observations = createTable(xMean, yMean, observations);
  let b1 = observations.reduce((total, observation) => total + observation['meanProducts'], 0) / observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
  let b0 = yMean - (b1 * xMean);

  return { b0, b1 }
}

/** createTable uses a set of observations to create a linear regression table
 * @param {Number} xMean - Mean of all independent coordinates (commonly known as "x")
 * @param {Number} yMean - Mean of all dependent coordinates (commonly known as "x")
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Array} - Observations with all data needed to create b0 and b1
 */
function createTable(xMean, yMean, observations) {
  return observations = observations.map((observation) => {
      observation["xMeanDist"] = observation.x - xMean;
      observation["yMeanDist"] = observation.y - yMean;
      return observation;
    })
    .map((observation) => {
      observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
      observation['meanProducts'] = observation['xMeanDist'] * observation['yMeanDist'];
      return observation;
    })
}

/** axisAverage uses a set of observations to create means for independent and dependent variables
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Object} - Object containing x axis mean and y axis mean
 */
function axisAverage(observations) {
  const xMean = observations.reduce((val, observation) => {
    return val + observation['x']
  }, 0) / observations.length;
  const yMean = observations.reduce((val, observation) => {
    return val + observation['y']
  }, 0) / observations.length;

  return { xMean, yMean }
}


/** predict uses a single observation and linear regression data to predict a y coordinate
 * @param {Number} observation - An independent coordinate (commonly known as "x")
 * @param {Number} b0 - The known y intercept of a regression line
 * @param {Number} b1 - The known slope of a regression line
 * @returns {Number} - A numerical prediction for the y coordinate that accompanies the passed in observation
 */
function predict(observation, b0, b1) {
  return b0 + (b1 * observation)
}

function grade(model, data) {
  let allGrades = 0;
  data.forEach((observation) => {
    let prediction = Math.ceil(predict(observation['x'], model.b0, model.b1));
    allGrades += Math.abs(prediction - observation.y);
  });

  return grade = allGrades / data.length
}

function findRSquared(b0, b1, observations) {
  let { xMean, yMean } = axisAverage(observations);
  observations = observations.map((observation) => {
      observation['y-yMean'] = observation.y - yMean;
      return observation
    })
    .map((observation) => {
      observation['y-yMean^2'] = (observation.y - yMean) * (observation.y - yMean);
      return observation
    })
    .map((observation) => {
      observation['yHat'] = (b0 + (b1 * observation.x))
        .toFixed(2);
      return observation
    })
    .map((observation) => {
      observation['yHat-yMean^2'] = (observation.yHat - yMean)
        .toFixed(2) * (observation.yHat - yMean)
        .toFixed(2);
      return observation
    });

  const yHatMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
      return total += observation['yHat-yMean^2'];
    }, 0)
    .toFixed(2);

  const yMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
    return total += observation['y-yMean^2'];
  }, 0)

  const rSquared = yHatMinusYMeanSquaredTotal / yMinusYMeanSquaredTotal;

  return rSquared
}

module.exports = {
  train,
  predict,
  grade,
  createTable,
  axisAverage,
  findRSquared
}

let data = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]


let _table = createTable(3,4, data);

console.table(_table);
