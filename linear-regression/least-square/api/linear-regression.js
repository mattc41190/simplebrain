function train(observations) {
    let {xMean, yMean} = axisAverage(observations);
    observations = createTable(xMean, yMean, observations)
	let b1 = observations.reduce((total, observation) => total + observation['meanProducts'], 0) / observations.reduce((total, observation) => total + observation['xMeanDistSquared'], 0);
    console.log(b1);
	let b0 = yMean - (b1 * xMean);
    console.log(b0);

	return {b0, b1}
}

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

function axisAverage(observations) {
    const xMean = observations.reduce((val, observation) => {
        return val + observation['x']
    }, 0) / observations.length;
    const yMean = observations.reduce((val, observation) => {
        return val + observation['y']
    }, 0) / observations.length;

    return {xMean, yMean}
}

function predict(observation, b0, b1) {
	return b0 + (b1 * observation)
}

function grade(model, data) {
	let allGrades = 0;
	data.forEach((observation) => {
		let prediction = Math.ceil(predict(observation['x'], model.b0, model.b1));
		allGrades += Math.abs(prediction - observation.y);
	});

	return grade = allGrades / data.length
}

module.exports = {
	train,
	predict,
	grade,
    createTable,
    axisAverage
}
