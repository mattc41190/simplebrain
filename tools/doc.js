const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
jsdoc2md.render({ files: 'linear-regression/api/linear-regression.js' })
.then((docs) => {fs.writeFileSync('./API.md', docs)});
