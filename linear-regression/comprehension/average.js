function average(observations, axis) {
  const total = observations.reduce((val, observation) => {
    if (observation[axis]) {
      return val + observation[axis];
    }
  }, 0);
  return total / observations.length;
}

module.exports = average;
