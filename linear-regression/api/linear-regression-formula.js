const helpers = require('./helpers.js');

/** train uses a set of observations to create b0 and b1
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Object} - Object containg b0 and b1 values
 */
function train(observations) {
	let {xMean, yMean} = helpers.axisAverage(observations);
	observations = createTable(xMean, yMean, observations);
	let b1 = observations.reduce((total, observation) => total + observation['meanProducts'], 0) / observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
	let b0 = yMean - (b1 * xMean);

	return {b0, b1}
}

/** createTable uses a set of observations to create a linear regression table
 * @param {Number} xMean - Mean of all independent coordinates (commonly known as "x")
 * @param {Number} yMean - Mean of all dependent coordinates (commonly known as "x")
 * @param {Array} observations - Array of objects containing numerical axises (Ex: [{x: 1, y: 2}])
 * @returns {Array} - Observations with all data needed to create b0 and b1
 */
function createTable(xMean, yMean, observations) {
	return observations = observations.map((observation) => {
		observation["xMeanDist"] = observation.x - xMean;
		observation["yMeanDist"] = observation.y - yMean;
		return observation;
	}).map((observation) => {
		observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
		observation['meanProducts'] = observation['xMeanDist'] * observation['yMeanDist'];
		return observation;
	})
}

/** predict uses a single observation and linear regression data to predict a y coordinate
 * @param {Number} observation - An independent coordinate (commonly known as "x")
 * @param {Number} b0 - The known y intercept of a regression line
 * @param {Number} b1 - The known slope of a regression line
 * @returns {Number} - A numerical prediction for the y coordinate that accompanies the passed in observation
 */
function predict(observation, b0, b1) {
	return b0 + (b1 * observation)
}

module.exports = {
	train,
	predict,
	createTable
}
