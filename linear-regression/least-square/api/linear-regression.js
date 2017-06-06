function train(observations) {
  let { xMean, yMean } = axisAverage(observations);
  observations = createTable(xMean, yMean, observations)
  let b1 = observations.reduce((total, observation) => total + observation['meanProducts'], 0) / observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
  let b0 = yMean - (b1 * xMean);

  return { b0, b1 }
}

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

function axisAverage(observations) {
  const xMean = observations.reduce((val, observation) => {
    return val + observation['x']
  }, 0) / observations.length;
  const yMean = observations.reduce((val, observation) => {
    return val + observation['y']
  }, 0) / observations.length;

  return { xMean, yMean }
}

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

function findStdDev() {
  var data = [0, 2, 4, 5, 7];
  var n = data.length;
  var average = data.reduce((sum, current) => {
    return sum += current
  }, 0) / n;
  console.log(average);
  var sum = data.reduce((_sum, current) => {
    // console.log((current - average) * (current - average));
    return _sum += (current - average) * (current - average)
  }, 0)
  console.log(sum);
  var stdDev = Math.sqrt(sum / (n - 1));
  console.log(stdDev);
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
    observation['yHat'] = (b0 + (b1*observation.x)).toFixed(2);
    return observation
  })
  .map((observation) => {
    observation['yHat-yMean^2'] = (observation.yHat -  yMean).toFixed(2) * (observation.yHat -  yMean).toFixed(2);
    return observation
  });

  const yHatMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
    return total += observation['yHat-yMean^2'];
  },0).toFixed(2);

  const yMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
    return total += observation['y-yMean^2'];
  },0)

  const rSquared = yHatMinusYMeanSquaredTotal/yMinusYMeanSquaredTotal;

  console.log(rSquared);
}

let actualObservations = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 3},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 4},
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 3},
  {"x" :  3, "y" : 4},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5},
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 3},
  {"x" :  3, "y" : 4},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]

findRSquared(2.2, .6, actualObservations);

module.exports = {
  train,
  predict,
  grade,
  createTable,
  axisAverage
}
