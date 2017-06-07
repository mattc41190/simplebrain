const tableify = require('tableify');
const createTable = require('./index.js').createTable;
const axisAverage = require('./index.js').axisAverage;

function createHtmlTable(observations) {
    let {xMean, yMean} = axisAverage(observations);
    let table = createTable(xMean, yMean, observations);
    return htmlTable =  tableify(table)
}

module.exports = {createHtmlTable};
