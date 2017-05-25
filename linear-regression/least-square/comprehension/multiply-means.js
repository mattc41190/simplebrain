function multiplyMeans(observationsWithDistanceSquares) {
  let finalProductsTable = Object.assign([], observationsWithDistanceSquares);

  for (var i = 0; i < observationsWithDistanceSquares.length; i++) {
    finalProductsTable[i]['meanProducts'] = Math.floor(observationsWithDistanceSquares[i]['xMeanDist'] * observationsWithDistanceSquares[i]['yMeanDist']);
  }
  return finalProductsTable;
}

module.exports = multiplyMeans;
