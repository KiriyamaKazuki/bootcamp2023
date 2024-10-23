const fs = require('fs');
const dirName = process.argv[2] || 'testProject';
// fs.mkdir('apple', { recursive:true }, (err) => {
//     if (err) throw  err;
// });

fs.mkdirSync(dirName);
fs.writeFileSync(`${dirName}/index.html`,'testman');
fs.writeFileSync(`${dirName}/app.js`, 'testman');
fs.writeFileSync(`${dirName}/styles.css`, 'testman');


