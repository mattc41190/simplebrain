function multiplyMeans(observations) {
  observations = observations.map((observation) => {
    observation['meanProducts'] =  observation['xMeanDist'] * observation['yMeanDist'];
    return observation;
  });
  return observations;
}

module.exports = multiplyMeans;
