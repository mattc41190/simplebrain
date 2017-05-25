const observations = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]

// use reduce!

// Create new table with averages included
function average(observations, axis) {
  let total = 0;
  let avg;
  for (var i = 0; i < observations.length; i++) {
    total += observations[i][axis];
  }

  avg = total / observations.length;
  return avg;
}

let xAverage = average(observations, 'x');
let yAverage = average(observations, 'y');

// use reduce!
function distanceToNum(observations, axis, num) {
  let observationsWithDistances = Object.assign([], observations);

  for (var i = 0; i < observations.length; i++) {
    observationsWithDistances[i][`${axis}MeanDist`] =  observations[i][axis] - num;
  }
  return observationsWithDistances;
}


let observationsWithDistancesXOnly = distanceToNum(observations, 'x', xAverage);
let observationsWithDistances = distanceToNum(observationsWithDistancesXOnly, 'y', yAverage);


console.log(observationsWithDistances);
