function calculateB1(finalProductsTable) {
    // quotient of the final two column sums

    // 1. Create Sum of xMeanSquares
    let xMeanSquaresSum = 0;
    for (var i = 0; i < finalProductsTable.length; i++) {
        xMeanSquaresSum += finalProductsTable[i]['xMeanDistSquared'];
    }

    let meanProductsSum = 0;
    for (var i = 0; i < finalProductsTable.length; i++) {
        meanProductsSum += finalProductsTable[i]['meanProducts'];
    }

    return meanProductsSum / xMeanSquaresSum;
}

module.exports = calculateB1;
