/** axisAverage uses a set of observations to create means for independent and dependent variables
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Object} - Object containing x axis mean and y axis mean
 */
function axisAverage(observations) {
	const xMean = observations.reduce((val, observation) => {
		return val + observation['x']
	}, 0) / observations.length;
	const yMean = observations.reduce((val, observation) => {
		return val + observation['y']
	}, 0) / observations.length;

	return {xMean, yMean}
}

module.exports = {axisAverage};
