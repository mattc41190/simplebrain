function calculateB0(xAverage, yAverage, b1) {
    return b0 = yAverage - (b1 * xAverage);
}

module.exports = calculateB0;
