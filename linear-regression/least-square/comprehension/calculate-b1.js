function calculateB1(observations) {
    let squaresSum = observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
    let productsSum = observations.reduce((total, observation) => total + observation['meanProducts'], 0);
    return productsSum / squaresSum;
}

module.exports = calculateB1;
