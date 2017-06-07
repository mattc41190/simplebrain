function appendMeanDistance(observations, xMean, yMean) {
  observations = observations.map((observation) => {
    observation["xMeanDist"] = observation.x - xMean;
    observation["yMeanDist"] = observation.y - yMean;
    return observation;
  });
  return observations;
}

module.exports = appendMeanDistance;
