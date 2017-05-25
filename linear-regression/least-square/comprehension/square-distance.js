function squareDistance(observationsWithDistances) {
  let observationsWithDistanceSquares = Object.assign([], observationsWithDistances);

  for (var i = 0; i < observationsWithDistances.length; i++) {
    observationsWithDistanceSquares[i]['xMeanDistSquared'] = observationsWithDistances[i]['xMeanDist'] * observationsWithDistances[i]['xMeanDist'];
  }
  return observationsWithDistanceSquares;
}

module.exports = squareDistance;
