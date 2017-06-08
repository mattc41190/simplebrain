var console = require('better-console');


var Formula = function(baseObservations) {
  this.observations = baseObservations;
  this.averages;
  this.b0;
  this.b1;
};

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
Formula.prototype.createTable = function () {
  this.observations.map((observation) => {
      observation["x"] = observation.x;
      observation["y"] = observation.y;
      return observation;
    })
    .map((observation) => {
      observation["xMeanDist"] = observation.x - this.xMean;
      observation["yMeanDist"] = observation.y - this.yMean;
      return observation;
    })
    .map((observation) => {
      observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
      observation['meanProducts'] = observation['xMeanDist'] * observation['yMeanDist'];
      return observation;
    })

    return this;
}
/** axisAverage uses a set of observations to create means for independent and dependent variables
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Object} - Object containing x axis mean and y axis mean
 */
Formula.prototype.axisAverage = function() {
   this.xMean = this.observations.reduce((val, observation) => {
    return val + observation['x']
  }, 0) / this.observations.length;
  this.yMean = this.observations.reduce((val, observation) => {
    return val + observation['y']
  }, 0) / this.observations.length;

  return this;
}

Formula.prototype.visualize = function() {
  if (this.xMean && this.yMean) {
    console.log(`xMean: ${this.xMean} yMean:${this.yMean}`);
  }
  console.table(this.observations);
  return this;
}

/** predict uses a single observation and linear regression data to predict a y coordinate
 * @param {Number} observation - An independent coordinate (commonly known as "x")
 * @param {Number} b0 - The known y intercept of a regression line
 * @param {Number} b1 - The known slope of a regression line
 * @returns {Number} - A numerical prediction for the y coordinate that accompanies the passed in observation
 */
Formula.prototype.predict = function(observation) {
  return this.b0 + (this.b1 * observation)
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

// module.exports = {
//   train,
//   predict,
//   grade,
//   createTable,
//   axisAverage,
//   findRSquared
// }

let data = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]
//
//
// let _table = createTable(3,4, data);
//
// console.table(_table);

let lr = new Formula(data)
  .axisAverage()
  .visualize()
  .createTable()
  .visualize()

// console.log(lr);
