function calculateB0(xAverage, yAverage, b1) {
    let eqRightSide = b1 * xAverage;
    let b0 = yAverage - eqRightSide;
    return b0;
}

module.exports = calculateB0;
