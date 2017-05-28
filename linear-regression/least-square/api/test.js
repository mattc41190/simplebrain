const linearRegression = require('./index.js');

let model = linearRegression.train('./observations.json');
let avgDifferencFromActual = linearRegression.grade(model, './observations.json');

console.log(avgDifferencFromActual);
