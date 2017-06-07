//NOTE: Observations state is not static!
let observations = [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]

// Calculate mean for each observation axis
const xMean = observations.reduce((val, observation) => { return val + observation['x'] }, 0) / observations.length;
const yMean = observations.reduce((val, observation) => { return val + observation['y'] }, 0) / observations.length;

observations = observations
.map((observation) => {
  observation["xMeanDist"] = observation.x - xMean;
  observation["yMeanDist"] = observation.y - yMean;
  return observation;
})
.map((observation) => {
    observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
    observation['meanProducts'] =  observation['xMeanDist'] * observation['yMeanDist'];
    return observation;
})

let b1 =  observations.reduce((total, observation) => total + observation['meanProducts'], 0) /
          observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
console.log(b1);

let b0 = yMean - (b1 * xMean);
console.log(b0);

let FINAL_SOLUTION =  b0 + (b1 * xMean);
console.log(FINAL_SOLUTION);
