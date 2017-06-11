const helpers = require('./helpers.js');

//NOTE: RSqaured is intended to work in coordination with linearRegression

/** train uses a set of observations to create b0 and b1
    * @param {Number} b0 - Number for the a line's Y intercept
    * @param {Number} b1 - Number for a line's slope
    * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
    * @returns {Number} - The rSqaured correlation score of a collection of data
*/
function findRSquared(b0, b1, observations) {
    const {xMean, yMean} = helper.axisAverage(observations);
	observations = RSquaredTable(observations);
	const yHatMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
		return total += observation['yHat-yMean^2'];
	}, 0).toFixed(2);

	const yMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
		return total += observation['y-yMean^2'];
	}, 0)

	return yHatMinusYMeanSquaredTotal / yMinusYMeanSquaredTotal;
}

function createRSquaredTable(observations) {
    return observations.map((observation) => {
		observation['y-yMean'] = observation.y - yMean;
		return observation
	}).map((observation) => {
		observation['y-yMean^2'] = (observation.y - yMean) * (observation.y - yMean);
		return observation
	}).map((observation) => {
		observation['yHat'] = (b0 + (b1 * observation.x)).toFixed(2);
		return observation
	}).map((observation) => {
		observation['yHat-yMean^2'] = (observation.yHat - yMean).toFixed(2) * (observation.yHat - yMean).toFixed(2);
		return observation
	});
}

module.exports = {findRSquared, createRSquaredTable};
