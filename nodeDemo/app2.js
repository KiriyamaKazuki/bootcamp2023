const math = require('./math');
const tama = require('../Modules_And_NPM_CODE/shelter/tama');
//ディレクトリを指定するとその中のindex.jsを見に行く
const cats = require('../Modules_And_NPM_CODE/shelter');


console.log(math);
console.log(math.square(8));

console.log('tama :'+ tama);

console.log('ディレクトリをrequire:', cats);
