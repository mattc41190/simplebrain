const assert = require('assert');
const path = require('path');
const linearRegression = require('../api/index.js').linearRegression;
const observations = require('./data/train_observations.json');

function doesModelProduce() {
  let model = linearRegression.train(observations);
  let avgDifferencFromActual = linearRegression.grade(model, require('./data/test_observations.json'));
  console.log(avgDifferencFromActual);
  assert(avgDifferencFromActual < 1);
}

doesModelProduce();
