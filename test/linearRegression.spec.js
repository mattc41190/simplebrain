const linearRegression = require('../index.js').linearRegression;
const observations = require('./data/train_observations.json');
const test = require('./data/test_observations.json');
const chai = require('chai');
const expect = chai.expect;

describe('Linear Regression', function() {
  describe('#grade', function() {
    it('should produce a grade for a regression line', function() {
      const model = linearRegression.train(observations);
      const avgDifferencFromActual = linearRegression.grade(model, test);
      expect(avgDifferencFromActual).to.equal(0.8);
    });
  });

  describe('#axisAverage', function() {
    it('should create an average of all x coordinates and y coordinates', function() {
      const {xMean, yMean} = linearRegression.axisAverage(observations);
      expect(xMean).to.equal(3);
      expect(yMean).to.equal(4);
    });
  });
});
