function appendSquaredDistance(observations) {
  observations = observations.map((observation) => {
    observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
    return observation;
  });

  return observations;
}

module.exports = appendSquaredDistance;
