const tableify = require('tableify');
const console = require('better-console');

function createHtmlTable(observations) {
    tableify(observations);
}

function displayFormulaData(observations) {
    console.table(observations);
}

module.exports = {createHtmlTable, displayFormulaData};
