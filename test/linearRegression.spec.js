const LinearRegressionFormula = require('../index.js').LinearRegressionFormula;
const observations = require('./data/train_observations.json');
const test = require('./data/test_observations.json');
const chai = require('chai');
const expect = chai.expect;

console.log(new LinearRegressionFormula());

describe('Linear Regression', function() {
	var linearRegressionFormula;

	beforeEach(function() {
		linearRegressionFormula = new LinearRegressionFormula(observations);
	});

	describe('#axisAverage', function() {
		it('should create a correct average of all x and y coordinates', function() {
			linearRegressionFormula.axisAverage();
			expect(linearRegressionFormula.xMean).to.equal(3);
			expect(linearRegressionFormula.yMean).to.equal(4);
		});
	});

	describe('#train', function() {
		it('should find b0 and b1 for a collection of correlated coordinates', function() {
			linearRegressionFormula.axisAverage().createTable().train();
			expect(linearRegressionFormula.b0).to.equal(2.2);
            expect(linearRegressionFormula.b1).to.equal(.6);
		});
	});

	xdescribe('#grade', function() {
		it('should produce a grade for a regression line', function() {
			const model = linearRegression.train(observations);
			const avgDifferencFromActual = linearRegression.grade(model, test);
			expect(avgDifferencFromActual).to.equal(0.8);
		});
	});

    describe('#predict', function() {
        it('should produce a prediction for a y coordinate given an x coordinate', function() {
            const prediction = linearRegression.predict(2.2, .6, 5);
            expect(prediction).to.equal(11.6);
        });
    });

    describe('#createTable', function() {
        it('should produce a table from which a regression line can be drawn', function() {
            const actualTable = linearRegression.createTable(3, 4, observations);
            const expectedTable = require('./data/#createTable.data.json');
            expect(actualTable).to.deep.equal(expectedTable);
        });
    });

});

describe('R Squared', function() {

	describe('#findRSquared', function() {
		it('should produce the rSquare grade for a regression line', function() {
			const rSquared = linearRegression.findRSquared(2.2, .6, observations);
			expect(rSquared).to.equal(.6);
		});
	});

});
