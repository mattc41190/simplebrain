// use reduce!
function distanceToMean(observations, axis, mean) {
  let observationsWithDistances = Object.assign([], observations);

  for (var i = 0; i < observations.length; i++) {
    observationsWithDistances[i][`${axis}MeanDist`] =  observations[i][axis] - mean;
  }
  return observationsWithDistances;
}

module.exports = distanceToMean;
