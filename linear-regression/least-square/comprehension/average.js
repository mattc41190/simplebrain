// use reduce!

function average(observations, axis) {
  let total = 0;
  let avg;
  for (var i = 0; i < observations.length; i++) {
    total += observations[i][axis];
  }

  avg = total / observations.length;
  return avg;
}

module.exports = average;
