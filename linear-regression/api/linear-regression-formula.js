const console = require('better-console');
const Formula = function(observations) {
	this.table = observations;
};

/** train uses a set of observations to create b0 and b1
 * @returns {Void} - Attaches b0 and b1 to the Formula object
 */
Formula.prototype.train = function() {
	this.b1 = this.table.reduce((total, observation) => total + observation['meanProducts'], 0) / this.table.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
	this.b0 = this.yMean - (this.b1 * this.xMean);

	return this;
}

/** createTable uses a set of observations to create a linear regression table
 * @returns {Void} - Appends values to observations creating the table to solve for b0 and b1
 */
Formula.prototype.createTable = function() {
	this.table.map((observation) => {
		observation["x"] = observation.x;
		observation["y"] = observation.y;
		return observation;
	}).map((observation) => {
		observation["xMeanDist"] = observation.x - this.xMean;
		observation["yMeanDist"] = observation.y - this.yMean;
		return observation;
	}).map((observation) => {
		observation['xMeanDistSquared'] = observation['xMeanDist'] * observation['xMeanDist'];
		observation['meanProducts'] = observation['xMeanDist'] * observation['yMeanDist'];
		return observation;
	})

	return this;
}
/** axisAverage uses a set of observations to create means for independent and dependent variables
 * @returns {Void} - Appends x and y mean values to the object
 */
Formula.prototype.axisAverage = function() {
	this.xMean = this.table.reduce((val, observation) => {
		return val + observation['x']
	}, 0) / this.table.length;
	this.yMean = this.table.reduce((val, observation) => {
		return val + observation['y']
	}, 0) / this.table.length;

	return this;
}

/** prints out the current state of the formula object
 * @returns {Void} - The current state of the formula is logged to the console
 */
Formula.prototype.show = function() {
	if (this.xMean && this.yMean) {
		console.log(`xMean: ${this.xMean} yMean: ${this.yMean}`);
	}
    if (this.b0 && this.b1) {
        console.log(`b0: ${this.b0} b1: ${this.b1}`);
    }
	console.table(this.table);
	return this;
}

/** predict uses a single observation and linear regression data to predict a y coordinate
 * @param {Number} observation - An independent coordinate (commonly known as "x")
 * @returns {Number} - A numerical prediction for the y coordinate that accompanies the passed in observation
 */
Formula.prototype.predict = function(observation) {
	return this.b0 + (this.b1 * observation)
}

function findRSquared(b0, b1, observations) {
	let {xMean, yMean} = axisAverage(observations);
	observations = observations.map((observation) => {
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

	const yHatMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
		return total += observation['yHat-yMean^2'];
	}, 0).toFixed(2);

	const yMinusYMeanSquaredTotal = observations.reduce((total, observation) => {
		return total += observation['y-yMean^2'];
	}, 0)

	const rSquared = yHatMinusYMeanSquaredTotal / yMinusYMeanSquaredTotal;

	return rSquared
}

module.exports = Formula;

// let data = [
// 	{
// 		"x": 1,
// 		"y": 2
// 	}, {
// 		"x": 2,
// 		"y": 4
// 	}, {
// 		"x": 3,
// 		"y": 5
// 	}, {
// 		"x": 4,
// 		"y": 4
// 	}, {
// 		"x": 5,
// 		"y": 5
// 	}
// ]
//
//
// let lr = new Formula(data)
//     .axisAverage()
//     .createTable()
//     .train()
//     .show();
